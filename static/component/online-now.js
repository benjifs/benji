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

	isActive(date) {
		if (!date) return false
		const d = new Date(date)
		return d.getTime() + this.interval > Date.now()
	}

	renderStatus(status) {
		if (!status) return
		const { lastSeen, nowPlaying } = status
		this.setAttribute('value', this.isActive(lastSeen) ? 'online' : 'offline')
		if (nowPlaying) {
			this.innerHTML = `<small>${this.isActive(nowPlaying.updated) ? 'Now playing' : 'Last played'}: <a href="${nowPlaying.url}">${nowPlaying.name} - ${nowPlaying.byArtist.name}</a></small>`
		}
	}

	async fetchStatus() {
		const res = await fetch(this.href, { headers: { 'Accept': 'application/json' } })
		if (!res.ok) return
		const json = await res.json()
		this.renderStatus(json)
	}
}

customElements.define('online-now', OnlineNow)