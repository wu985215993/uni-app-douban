<template>
  <view>
    <view class="search-wrapper">
      <view class="search-content">
        <image src="../../static/imgs/ic_search.png" mode=""></image>
        <navigator url="../search/search"><text>搜索</text></navigator>
      </view>
    </view>
    <RowList type="影院热映" />
    <RowList type="即将上映" />
  </view>
</template>

<script>
import RowList from '../../components/row-list/row-list.vue';
export default {
  components: {
    RowList
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  height: 60rpx;
  background-color: #42bd55;
  padding: 15rpx;
  .search-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55rpx;
    background-color: #fff;
    border-radius: 8rpx;
    color: #b2b2b2;
    image {
      width: 30rpx;
      height: 30rpx;
    }
  }
}
</style>
