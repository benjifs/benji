import * as sass from 'sass'
import { parse } from 'node:path'

const { ELEVENTY_RUN_MODE } = process.env

export default (config) => {
	config.addTemplateFormats('scss')
	config.addWatchTarget('src/scss')
	config.addExtension('scss', {
		outputFileExtension: 'css',
		compile: async function(inputContent, inputPath) {
			const parsed = parse(inputPath)
			if (parsed.name.startsWith('_')) return

			const result = sass.compileString(inputContent, {
				loadPaths: [parsed.dir || '.'],
				style: ELEVENTY_RUN_MODE == 'serve' ? 'expanded' : 'compressed',
				sourceMap: true
			})
			this.addDependencies(inputPath, result.loadedUrls)

			return async () => result.css
		},
		compileOptions: {
			permalink: (contents, inputPath) =>
				inputPath
					.replace('src/scss/', 'build/css/')
					.replace('scss', 'min.css')
		},
	})
}
