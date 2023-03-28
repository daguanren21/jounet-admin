import { createApp } from 'vue'
import App from './App.vue'
import setupAssets from './styles/assets'

createApp(App).mount('#app')

async function setupApp(){
	setupAssets()
	const app = createApp(App);
  //store ：pinia
	// directives
	// vue router
  
	app.mount('#app');
}
setupApp()
