import {
    createApp
} from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 1. 引入你需要的组件
import {
    NavBar,
    Icon,
    Toast,
    Switch,
    Cell,
    Button
} from 'vant';
// 2. 引入组件样式
import './assets/scss/theme.css'
import 'vant/lib/index.css';
import router from './router'; // 引入路由配置文件
import './style.css'
import pinia from './store';

const app = createApp(App);
app.use(NavBar)
app.use(Icon)
app.use(Toast)
app.use(Cell)
app.use(Switch)
app.use(Button)
app.use(router); // 使用路由
app.use(pinia)
app.use(ElementPlus)
app.mount('#app');