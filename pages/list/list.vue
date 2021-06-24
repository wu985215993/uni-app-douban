<template>
  <view class="list-wrapper">
    <MovieItem v-for="item in list" :key="item._id" :movieImg="item.movieImg" :title="item.title" :stars="item.stars" :average="item.average" />
    <view v-if="list.length" class="bottomSign">
      <view v-if="!done">正在加载中</view>
      <view v-else>我是有底线的</view>
    </view>
  </view>
</template>

<script>
import { getHotMoviesApi, getComingMoviesApi } from '../../apis/movies.js';
import MovieItem from '../../components/movie-item/movie-item.vue';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations, mapActions, mapGetters } = createNamespacedHelpers('movies');
export default {
  data() {
    return {
      type: '影院热映'
    };
  },
  components: { MovieItem },
  onLoad(options) {
    this.type = options.type;
    uni.setNavigationBarTitle({
      title: this.type
    });
    this.init(this.type);
    //设置动态导航条
  },
  //页面上拉到底部的时候会执行
  onReachBottom() {
    this.getMovies(this.type);
  },
  //下拉刷新
  onPullDownRefresh() {
    //重置数据
    this.refresh();
  },
  computed: {
    ...mapState(['list', 'start', 'total']),
    ...mapGetters(['done'])
  },
  methods: {
    ...mapActions(['getMovies']),
    ...mapMutations(['setData']),
    async refresh() {
      //重置数据
      this.setData({
        list: [],
        start: 0,
        total: 1
      });
      await this.init(this.type);
      uni.stopPullDownRefresh();
    },

    async init(type) {
      uni.showLoading();
      await this.getMovies(type);
      uni.hideLoading();
    }
  }
};
</script>

<style lang="scss">
.list-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 44rpx;
}
.bottomSign {
  position: fixed;
  bottom: 0;
}
</style>
