import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.use(VueLazyload)

app.config.globalProperties.axios = axios
app.mount('#app')
