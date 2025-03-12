---
title: import-letterboxd-watchlist.js
summary: |
  This script can parse a letterboxd watchlist csv and return it in json format. If you provide a themoviedb.org API key,you will also pull additional info about the film as part of the parsed response.
---

```js
// Example: TMDB_API_KEY=abc...123 node ./watchlist.js ./watchlist-user-2025-01-01-00-00-utc.csv"
import fs from 'fs'
import { setTimeout } from 'timers/promises'

const searchTMDB = async (i, title, year) => {
	if (!process.env.TMDB_API_KEY) return
	// Not necessary but it's meant to deal with API limits just in case
	if (i % 10 == 0) await setTimeout(1000)

	const params = new URLSearchParams({
		api_key: process.env.TMDB_API_KEY,
		query: title,
		year: year
	})

	console.log(`Searching for "${title}" (${year})`)
	const res = await fetch(`https://api.themoviedb.org/3/search/movie?${params.toString()}`)
	let m
	if (res.status === 200) {
		const json = await res.json()
		m = json.results[0]
		console.log(`  Found: tmdb:${m.id}`)
	}
	if (!m) {
		console.warn('  Not found')
		return
	}
	return {
		id: `tmdb:${m.id}`,
		name: m.original_title,
		photo: `https://image.tmdb.org/t/p/original${m.poster_path}`,
		published: (m.release_date || '').split('-')[0],
		content: m.overview,
		url: `https://themoviedb.org/movie/${m.id}`
	}
}

(async () => {
	const args = process.argv
	if (!args || args.length < 3 || !fs.existsSync(args[2])) {
		return console.error('Missing letterboxd .csv export')
	}
	const file = fs.readFileSync(args[2], 'utf-8')
	const lines = file.split('\n')
	const watchlist = []
	for (const [i, line] of lines.entries()) {
		// Should use an actual csv parser here instead of this
		const [date, title, year, url] = line.split(',')
		if (url && url.trim() != 'Letterboxd URI') {
			const tmdb = await searchTMDB(i, title, year)
			watchlist.push({
				date, title, year, url: url.trim(),
				...(tmdb ? tmdb : {})
			})
		}
	}
	// Not needed as list is already sorted but why not
	watchlist.sort((a, b) => parseInt(b.date.replace('-', '')) - parseInt(a.date.replace('-', '')))
	console.log(JSON.stringify(watchlist, null, 2))
})()
```