import { defineConfig, presetAttributify, presetIcons, presetUno, transformerCompileClass, transformerDirectives, transformerVariantGroup } from "unocss"

export default defineConfig({
	theme: {
		fontFamily: {
			sans: '\'Inter\', sans-serif',
			mono: '\'Fira Code\', monospace',
		},
	},
	shortcuts: [{
		'flex-center': 'flex justify-center items-center',
		'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
		'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
		'ellipsis-text': 'nowrap-hidden text-ellipsis',
	}],
	presets: [
		presetUno({
			attributifyPseudo: true,
		}),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
			extraProperties: {
				'color': 'inherit',
				'min-width': '1.2em'
			}
		})
	],
	transformers: [
		transformerCompileClass(),
		transformerVariantGroup(),
		transformerDirectives(),
	],
})
