<template>
  <view class="movie-item">
    <image :src="movieImg" class="cover"></image>
    <view class="title">{{ title }}</view>
    <view class="stars-and-score">
      <view class="stars-wrapper">
        <image src="../../static/imgs/rating_star_xsmall_on.png" class="star"></image>
        <image src="../../static/imgs/rating_star_xsmall_on.png" class="star"></image>
        <image src="../../static/imgs/rating_star_xsmall_on.png" class="star"></image>
        <image src="../../static/imgs/rating_star_xsmall_on.png" class="star"></image>
        <image src="../../static/imgs/rating_star_xsmall_on.png" class="star"></image>
      </view>
      <text>{{ average }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'movie-item',
  props: {
    movieImg: {
      type: String,
      default: 'http://p0.meituan.net/165.220/movie/238e2dc36beae55a71cabfc14069fe78236351.jpg'
    },
    stars: {
      type: String,
      default: '45'
    },
    average: {
      type: String,
      default: '9.7'
    },
    title: {
      type: String,
      default: '我不是药神'
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.movie-item {
  width: 160rpx;
  margin-right: 30rpx;
  margin-bottom: 65rpx;
  .cover {
    width: 160rpx;
    height: 225rpx;
    border-radius: 8rpx;
  }
  .title {
    width: 160rpx;
    overflow: hidden;
    color: #1d1d1d;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .stars-and-score {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text{
      color: #8a8a8a;
      font-size: 22rpx;
    }
    .stars-wrapper {
      font-size: 10rpx;
      display: flex;
      align-items: center;
      .star {
        width: 22rpx;
        height: 22rpx;
      }
    }
  }
}
</style>
