/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import App from './App.vue' // Components
import { createApp } from 'vue' // Composables
import { registerPlugins } from '@/plugins' // Plugins
import router from './router' // Router
import { createPinia } from 'pinia' // Pinia, state management

import { VueFire, VueFireAuth } from 'vuefire'
// import { firebaseApp } from './firebase'

// const pinia = createPinia()
const app = createApp(App)

registerPlugins(app)

app.use(router)
// app.use(pinia)
// app.use(VueFire, {
//     // imported above but could also just be created here
//     firebaseApp,
//     modules: [
//       // we will see other modules later on
//       VueFireAuth(),
//     ],
//   })

app.mount('#app')