import fs from 'fs'
// Run locally with:
// `WM_TOKEN=1234 node fetch_webmentions.js`
import { webmentions } from '../11ty/plugins/webmentions.js'

(async () => {
	const { WM_TOKEN, WEBMENTIONS_DIR = './wm' } = process.env
	if (!WM_TOKEN) throw new Error('WM_TOKEN is undefined')
	const wms = await webmentions()
	if (!wms || wms.length === 0) return console.log('Could not find any webmentions. Exiting')
	if (!fs.existsSync(WEBMENTIONS_DIR)) fs.mkdirSync(WEBMENTIONS_DIR)
	fs.writeFileSync(`${WEBMENTIONS_DIR}/cache.json`, JSON.stringify(wms, null, 2))
})()