<template>
  <view class="search-item">
    <image class="search__item__img" :src="movieImg" />
    <view class="search__item__content">
      <view class="search__item__title">{{ title }}</view>
      <view class="stars-and-score">
        <view class="stars-wrapper"><image v-for="(starItem, starItemIndex) in renderStars" :src="starItem" :key="starItemIndex" class="star"></image></view>
        <text>{{ average }}</text>
      </view>
      <view class="search__item__desc">{{ year }}/{{ genres }}/{{ directors }}/{{ casts }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'search-item',
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
    },
    year: {
      type: String,
      default: '2001'
    },
    genres: {
      type: String,
      default: 'genrestest'
    },
    directors: {
      type: String,
      default: 'directorstest'
    },
    casts: {
      type: String,
      default: 'caststest'
    }
  },
  data() {
    return {};
  },

  computed: {
    renderStars() {
      const pathArr = [];
      for (let i = 0; i < this.stars[0]; i++) {
        pathArr.push('../../static/imgs/rating_star_xsmall_on.png'); //全星
      }
      if (this.stars[1] === '5') {
        pathArr.push('../../static/imgs/rating_star_xsmall_half.png'); //半星
      }
      let len = pathArr.length;
      for (let i = 5; i > len; i--) {
        pathArr.push('../../static/imgs/rating_star_xsmall_off.png'); //灰色星
      }
      return pathArr;
    }
  }
};
</script>

<style lang="scss" scoped>
  .search-item{
    display: flex;
    padding: 30rpx 0;
    border-bottom: 1px solid #d8d8d8;
  }
.search {
  &__item {
    &__img {
      display: block;
      width: 120rpx;
      height: 168rpx;
      margin-right: 35rpx;
    }
    &__content {
      flex: 1;
      color: #818181;
    }
    &__title {
      color: #000;
      font-size: 30rpx;
      padding: 10rpx 0;
      margin-bottom: 10rpx;
    }
    &__desc {
      height: 60rpx;
      font-size: 25rpx;
      white-space: wrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
.stars-and-score {
  display: flex;
  font-size: 20rpx;
  .stars-wrapper {
    .star{
      width: 20rpx;
      height: 20rpx;
    }
  }
}
</style>
