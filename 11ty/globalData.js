const globalData = {
	today: () => new Date(),
}

export default (config) => {
	for (const [name, data] of Object.entries(globalData)) {
		config.addGlobalData(name, data)
	}
}
