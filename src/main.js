import { createApp } from 'vue';
import App from './App.vue';
import Maska from 'maska';
import VueDragscroll from 'vue-dragscroll';
import './assets/scss/global.scss';

const app = createApp(App);

app.use(Maska).use(VueDragscroll);

app.mount('#app');
