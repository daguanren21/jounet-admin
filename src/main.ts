import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import setupAssets from './styles/assets'

createApp(App).mount('#app')

async function setupApp() {
	setupAssets()
	const app = createApp(App);
	//store ：pinia
	setupStore(app)
	// directives
	// vue router
	await setupRouter(app)
	app.mount('#app');
}
setupApp()
