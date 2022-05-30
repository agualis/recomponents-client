import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import '../node_modules/@rebilly/recomponents-next/dist/style.css';
import {install} from '@rebilly/recomponents-next';

const app = createApp(App);
// Install registers all recomponents and directives
// We could alternatively import them one by one:
// import {RButton, RBadge, RDateInput} from 'rebilly-recomponents-next';
install(app);
app.mount('#app');
