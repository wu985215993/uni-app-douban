import request from '../utils/request.js'
//登录
export const loginApi = (data) => request("/users/login", {
  data
})
//获取影院热映的电影
export const getHotMoviesApi = (params = {
  start: 0,
  count: 10
}) => request(`/movies/hot?start=${params.start}&count=${params.count}`,{
  method:'GET'
})
//即将上映
export const getComingMoviesApi = (params = {
  start: 0,
  count: 10
}) => request(`/movies/coming?start=${params.start}&count=${params.count}`,{
  method:'GET'
})
//搜索电影
export const searchMoviesApi = params => request(`/movies/searchMovies`,{
  method:'POST',
  data:params
})
//获取电源盒详情
export const getMovieDetailApi = id => request(`/movies/detail?_id=${id}`,{
  method:'GET'
})