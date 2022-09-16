import {createApp} from 'vue';
import App from "../pages/demo.vue"
const app = createApp(App);

const strokeBtn = app.directive('stroke-btn', {
  bind: function (el, binding, vnode) {
    el.classList.add('n-button-stroke');
    if(vnode.componentOptions.propsData.theme == 'secondary') {
      el.classList.add('n-button-stroke-secondary');
    }
    else {
      el.classList.add('n-button-stroke-primary');
    }

  }
})
app.use(strokeBtn);

// bind
// inserted
// update
// componentUpdated
// unbind

export default strokeBtn;