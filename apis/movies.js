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