const globalData = {
	today: () => new Date(),
	years: () => Array.from(
		{ length: new Date().getFullYear() - 2022 + 1 },
		(_, i) => 2022 + i)
}

export default (config) => {
	for (const [name, data] of Object.entries(globalData)) {
		config.addGlobalData(name, data)
	}
}
