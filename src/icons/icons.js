import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretRight)
Vue.component('fa-icon', FontAwesomeIcon)

export default library

// Register Your Icons
//
// * Search for icons here: https://fontawesome.com/icons?d=gallery&m=free
// * Add your icon to the list of imports. Import name must be camel-case and prefixed-with fa.
// * The lists are alphebetical.  Please insert your icon in the right place.
// * Add your icon to the icons.add() statement. Name must match name in import statement. Separate all by commas.

// In the page
// Use the icon component like this: <icon icon="info-circle" />
// Change the icon attribute to correspond to the icon that you registered above.
//  The value of the icon attribute must be a kebab-case variant of your icon's variable name.
//  All lower-case, hyphen-spaced.
