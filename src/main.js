import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import 'swiper/swiper-bundle.css'

const app = createApp(App)
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ion-')

app.use(createPinia())
app.use(router)
app.mount('#app')
