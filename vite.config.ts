import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins } from './build';
// https://vitejs.dev/config/
export default defineConfig(config=>{
	const viteEnv = loadEnv(config.mode,process.cwd()) as any as ImportMetaEnv
	return {
		plugins:setupVitePlugins(viteEnv)
	}
})
