import { PluginOption } from 'vite';
import unplugin from './unplugin';
import vue from '@vitejs/plugin-vue'

/**
 * vite插件
 */

export function setupVitePlugins(env: ImportMetaEnv): (PluginOption | PluginOption[])[] {
	const plugins = [vue(),...unplugin(env)]
	return plugins
}
