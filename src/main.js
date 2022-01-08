import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './Store'
import VueSweetalert2 from 'vue-sweetalert2'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'sweetalert2/dist/sweetalert2.min.css'

const sweetalert2options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueSweetalert2, sweetalert2options)
app.mount('#app')
