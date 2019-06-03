
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretRight)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

export default library
