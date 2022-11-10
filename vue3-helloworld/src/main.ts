import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

import { router } from './routes/router';
// console.log('VITE_BASE_API', import.meta.env.VITE_BASE_API);

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount('#app');
