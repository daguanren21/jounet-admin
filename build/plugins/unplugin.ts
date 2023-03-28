import AutoImport from 'unplugin-auto-import/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export default function unplugin(env:ImportMetaEnv) {
	return [
		VueMacros(),
		AutoImport({
			eslintrc: {
				enabled: true
			},
			include: [
				/\.[tj]sx?$/,
				/\.vue$/, /\.vue\?vue/,
			],
			imports: [
				'vue', 'vue-router', 'pinia'
			],
			dirs: ["src/composables",],
			dts: "src/typings/auto-import.d.ts"
		}),
		Components({
			dirs: ["src/components"],
			// types: [{
			// 	from: 'vue-router',
			// 	names: ['RouterLink', "RouterView"]
			// }],
			resolvers: [
				NaiveUiResolver()
			],
			dts: "src/typings/components.d.ts"
		})
	]
}
