import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuexPersist from './utils/vuex-persist';
import * as directives from './directives';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import 'flowbite';
import './assets/css/main.css';

const app = createApp(App);

const toastOptions = {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
};


app.use(store);
app.use(router);
app.use(Toast, toastOptions);

vuexPersist(store);

Object.keys(directives).forEach(key => {
  app.directive(key, directives[key]);
});

app.config.errorHandler = (err) => {
  console.error('Vue error:', err);
};

window.store = store;

async function initializeApp() {
  await store.dispatch('auth/initializeAuth');
  app.mount('#app');
}
initializeApp();

if (import.meta.env.DEV) {
  window.app = app;
}