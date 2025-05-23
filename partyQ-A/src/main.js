import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'

import router from './router'
import axios from 'axios'

const app = createApp(App)

app.config.globalProperties.axios = axios;

app.use(router);
app.mount('#app');
