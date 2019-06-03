import EasyCm from './EasyCm.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretRight)

const VueEasyCm = {
  install: function (Vue) {
    Vue.component('easy-cm', EasyCm)
    Vue.prototype.$easycm = function (e, root, tag) {
      e.stopPropagation()
      e.preventDefault()
      root.$emit('easyAxis', {
        tag: tag,
        x: e.clientX,
        y: e.clientY
      })
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueEasyCm)
  window.Vue.component('FontAwesomeIcon', FontAwesomeIcon)
}

export default VueEasyCm
