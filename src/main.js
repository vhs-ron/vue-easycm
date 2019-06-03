import Vue from 'vue'
import App from './App.vue'
import VueEasyCm from './lib/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretRight)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.use(VueEasyCm)
new Vue({
  el: '#app',
  render: h => h(App)
})
