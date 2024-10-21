
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import './index.css'
import { Search ,Swipe,SwipeItem} from 'vant'
import 'vant/lib/index.css';
const app = createApp(App)
app.provide('axios', axios)
app.use(createPinia())
app.use(router)
app.use(Search)
app.use(Swipe)
app.use(SwipeItem)
app.mount('#app')
