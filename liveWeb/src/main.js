import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils/rem";
import "../styles/index.scss";
const app = createApp(App);
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);
app.use(router);

app.mount("#app");
