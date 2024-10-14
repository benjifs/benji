import fs from 'fs'
import path from 'path'

const globalData = {
	today: () => new Date(),
	webmentions: () => {
		const filePath = process.env.WEBMENTIONS_DIR || './wm'
		const webmentions = {}
		fs.readdir(filePath, (err, files) => {
			if (err) return console.error('ERROR:', err.code || 'unexpected error')
			files.forEach(async file => {
				if (path.extname(file) === '.json') {
					webmentions[path.basename(file, '.json')] = JSON.parse(fs.readFileSync(`${filePath}/${file}`))
				}
			})
		})
		return webmentions
	}
}

export default (config) => {
	for (const [name, data] of Object.entries(globalData)) {
		config.addGlobalData(name, data)
	}
}
