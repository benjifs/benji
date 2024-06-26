class OnlineNow extends HTMLElement {
	connectedCallback() {
		this.fetchStatus()
		setInterval(() => this.fetchStatus(), 60 * 1000)
	}

	get href() {
		return this.getAttribute('href')
	}

	get interval() {
		return this.getAttribute('interval') || (5 * 60 * 1000)
	}

	async fetchStatus() {
		const res = await fetch(this.href, { headers: { 'Accept': 'application/json' } })
		if (!res.ok) return
		const json = await res.json()
		this.setAttribute('value', json && json.lastSeen + this.interval > Date.now() ? 'online' : 'offline')
		this.innerHTML = this.getAttribute('value') === 'online' ? 'Online Now' : ''
	}
}

customElements.define('online-now', OnlineNow)