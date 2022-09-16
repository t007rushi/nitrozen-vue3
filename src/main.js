import {createApp} from 'vue'
// import App from './pages/custom-form-demo.vue'
import App from './pages/demo.vue'
// import NitrozenVuePlugin from './setup';

const app = createApp(App);
// app.config.compilerOptions.isCustomElement = (tag) => tag.includes('nitrozen-')
// app.use(NitrozenVuePlugin);
app.mount('#app')