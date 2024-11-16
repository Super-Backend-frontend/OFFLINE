import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ion-')

app.use(createPinia())
app.use(axios())

app.use(router)
app.mount('#app')
