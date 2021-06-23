<template>
  <view class="row-list">
    <view class="row-list-header">
      <view>{{ type }}</view>
      <view>
        <text>查看更多</text>
        <image src="../../static/imgs/ic_arrow_green_right.png"></image>
      </view>
    </view>
    <scroll-view scroll-x="true" enable-flex="true" class="movies">
      <MovieItem v-for="item in list" :key="item._id" :movieImg="item.movieImg" :title="item.title" :stars="item.stars" :average="item.average" />
    </scroll-view>
  </view>
</template>

<script>
import MovieItem from '../movie-item/movie-item.vue';
import { getComingMoviesApi, getHotMoviesApi } from '../../apis/movies.js';
export default {
  name: 'row-list',
  props: {
    type: {
      type: String,
      dafault: '影院热映'
    }
  },
  components: {
    MovieItem
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      //根据type判断发送哪个接口
      uni.showLoading()
      const api = this.type === '影院热映' ? getHotMoviesApi : getComingMoviesApi;
      const data = await api();
      uni.hideLoading()
      this.list = data.rows;
    }
  }
};
</script>

<style lang="scss">
.row-list {
  padding: 30rpx;
  .row-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30rpx;
    font-weight: bolder;
    color: #505050;
    margin-bottom: 40rpx;
    image {
      width: 20rpx;
      height: 20rpx;
      margin-left: 10rpx;
    }
    text {
      color: #2b9c34;
    }
  }
  .movies {
    display: flex;
    height: 315rpx;
  }
}
</style>
