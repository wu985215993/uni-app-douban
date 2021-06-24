import {
  getHotMoviesApi,
  getComingMoviesApi
} from '../apis/movies.js';
export default {
  namespaced:true,
  state: {
    list: [],
    start: 0,
    total: 1
  },
  mutations: {
    setData(state, payload) {
      state.list = payload.list;
      state.start = payload.start;
      state.total = payload.total;
    }
  },
  actions: {
    async getMovies(context, type) {
      //根据type判断发送哪个接口
      const {
        list,
        total,
        start
      } = context.state;
      if (list.length === total) return;
      const api = type === '影院热映' ? getHotMoviesApi : getComingMoviesApi;
      const data = await api({
        count: 10,
        start
      });
      context.commit('setData',{
        list:[...list,...data.rows],
        start:start + data.count,
        total:data.total
      })
     
    }
  },
  getters:{
    done(state) {
      return state.list.length === state.total && state.list.length;
    }
  }
}
