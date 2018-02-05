import Vue from 'vue'
import VeeValidate from 'vee-validate'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import '@/styles/index.scss' // global css
import 'font-awesome/css/font-awesome.min.css'

import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
// import './mock' // simulation data

import * as filters from './filters' // global filters
FastClick.attach(document.body)
Vue.use(Mint)

Vue.use(VeeValidate, {
  errorBagName: 'errors', // change if property conflicts
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  classes: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true,
  i18n: null, // the vue-i18n plugin instance,
  i18nRootKey: 'validations' // the nested key under which the validation messsages will be located
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
