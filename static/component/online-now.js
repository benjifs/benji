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
		if (json && json.lastSeen + this.interval > Date.now()) {
			this.innerHTML = 'Online Now'
		}
	}
}

customElements.define('online-now', OnlineNow)