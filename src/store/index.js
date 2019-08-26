import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    LoginState: true,
    UserName:'nwzhr',
    ReadingBlog:0
  }
})

export default store
