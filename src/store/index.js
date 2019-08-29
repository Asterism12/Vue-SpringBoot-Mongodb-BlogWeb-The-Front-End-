import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    LoginState: false,
    UserName:'',
    Classification:'',
    SearchKeyword:'',}
})

export default store
