import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from '../router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false


let instance 
let router
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue-mfe' : '/',
    mode: 'history',
    routes,
  });
  console.log('container', container)
  instance = new Vue({
    router,
    // store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  console.log('vue unmount')
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}