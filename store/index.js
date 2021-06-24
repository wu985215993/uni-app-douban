import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import movies from './movies.js'

export default new Vuex.Store({
  modules:{
    //key 模块的名称或者数据切片的名字 :value (对应的module配置)
    movies
  }
})
