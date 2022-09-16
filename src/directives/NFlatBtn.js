import {createApp} from 'vue';
import App from "../pages/demo.vue"
const app = createApp(App);

const flatBtn = app.directive('flat-btn', {
  beforeMount: function (el, binding, vnode) {
    el.classList.add('n-flat-button');
    if(binding.componentOptions.propsData.theme == 'secondary'){
      el.classList.add('n-flat-button-secondary');
    }
    else{
      el.classList.add('n-flat-button-primary');
    }

  }
})
app.use(flatBtn);

// bind
// inserted
// update
// componentUpdated
// unbind

export default flatBtn;