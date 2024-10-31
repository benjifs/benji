import { minify } from 'uglify-js'

export default async (config) => {
	config.addTemplateFormats('js')
	config.ignores.add('./src/**/*.11tydata.js')
	config.addExtension('js', {
		outputFileExtension: 'js',
		compile: function(content, inputPath) {
			if (!inputPath.includes('/src/js/')) return
			const min = minify(content)
			return () => min.code
		},
		compileOptions: {
			permalink: (contents, inputPath) =>
				inputPath
					.replace('src/js/', 'build/js/')
					.replace('.js', '.min.js')
		},
	})
}
