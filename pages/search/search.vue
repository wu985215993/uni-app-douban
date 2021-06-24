<template>
  <view>
    <view class="search">
      <view class="search__bar">
        <input type="text" placeholder="请输入要搜索的内容" class="search__bar__input" v-model.lazy="searchValue"/>
        <image src="../../static/imgs/ic_search.png" class="search__bar__icon"></image>
      </view>
    </view>
    <view class="search__list" @click="jumpToMovieDetail">
      <view class="search__item" v-for="item in searchList" :key="item._id">
        <searchItem :movieImg="item.movieImg" :stars="item.stars" :average="item.average"
        :title="item.title"
        :year="item.year"
        :genres="item.genres"
        :directors="item.directors"
        :casts="item.casts"
		:data-id='item._id'
        />
      </view>
      <view v-if="!searchList.length" :style="{textAlign:'center'}">未搜索到结果</view>
    </view>
  </view>
 
</template>

<script>
  import searchItem from '../../components/search-item/search-item'
  import {searchMoviesApi} from '../../apis/movies.js'
  export default {
    data() {
      return {
        searchValue:'',
        searchList:[]
      }
    },
    components:{
      searchItem
    },
    async onLoad(){
      const data = await searchMoviesApi()
      this.searchList = data.rows
    },
    watch:{
      async searchValue(cur,pre){
        uni.showLoading({
          title:'正在搜索'
        })
        const data = await searchMoviesApi({title:cur});
        uni.hideLoading()
        this.searchList = data.rows;
      }
    },
	methods:{
		jumpToMovieDetail(e){
			const id = e.target.dataset.id;
			uni.navigateTo({
				url:`/pages/details/details?id=${id}`
			})
		}
	}
  }
</script>

<style lang="scss" scoped>
.search{
  padding: 15rpx;
  background-color: #42BD56;
    &__list {
      padding: 30rpx 30rpx;
  }
  &__bar{
    position: relative;
     &__input{
       font-size: 30rpx;
       color: #191919;
       font-weight: bold;
       line-height: 55rpx;
       height: 55rpx;
       padding: 15rpx 0 15rpx 55rpx;
       border-radius: 10rpx;
       background-color: #fff;
     }
     &__icon{
       width: 30rpx;
       height: 30rpx;
       position: absolute;
       left: 18rpx;
       top:25rpx
     }
  }
  
}

</style>
