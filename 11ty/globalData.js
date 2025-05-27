import fs from 'fs'
import path from 'path'

const globalData = {
	today: () => new Date(),
}

export default (config) => {
	for (const [name, data] of Object.entries(globalData)) {
		config.addGlobalData(name, data)
	}
}
