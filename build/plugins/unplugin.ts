import AutoImport from 'unplugin-auto-import/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { getSrcPath } from '../utils';
export default function unplugin(env: ImportMetaEnv) {
	const { VITE_ICON_PREFFIX, VITE_ICON_LOCAL_PREFFIX } = env;
	const srcPath = getSrcPath();
	const localIconPath = `${srcPath}/assets/icons`

	const collectionName = VITE_ICON_LOCAL_PREFFIX.replace(`${VITE_ICON_PREFFIX}-`, "")
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
				'vue', 'vue-router', 'pinia', {
					'naive-ui': [
						'useDialog',
						'useMessage',
						'useNotification',
						'useLoadingBar'
					],
					'lodash-es': [
						'cloneDeep'
					]
				}
			],
			dirs: ["src/composables", "src/composables/**"],
			dts: "src/typings/auto-import.d.ts"
		}),
		Components({
			dirs: ["src/components", "src/components/**"],
			types: [{
				from: 'vue-router',
				names: ['RouterLink', "RouterView"]
			}],
			resolvers: [
				NaiveUiResolver()
			],
			dts: "src/typings/components.d.ts"
		}),
		Icons({
			compiler: "vue3",
			customCollections: {
				[collectionName]: FileSystemIconLoader(localIconPath, svg =>
					svg.replace(/^<svg\s/, '< width="1em" height="1em" ')
				)
			},
			scale: 1,
			defaultClass: "inline-block"
		}),
		createSvgIconsPlugin({
			iconDirs: [localIconPath],
			symbolId: `${VITE_ICON_LOCAL_PREFFIX}-[dir]-[name]`,
			inject: 'body-last',
			customDomId: '__SVG_ICON_LOCAL__'
		}),
	]
}
