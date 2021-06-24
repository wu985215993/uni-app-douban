<template>
	<view class="details">
		<view class="header">
			<image class="header__img" :src="movieImg"></image>
			<view class="header__content">
				<view class="header__content__title">{{ title }}</view>
				<view class="header__content__desc">{{ genres }}/ 片场{{ durations }}分钟</view>
				<view class="header__content__desc">{{ genres }}/ 片场{{ durations }}分钟</view>
				<view class="header__content__innerWrapper">
					<button class="header__content__innerWrapper__btn">想看</button>
					<button class="header__content__innerWrapper__btn">看过</button>
				</view>
			</view>
		</view>
		<view class="commons">
			<view class="commons__title">
				<text>豆瓣评分</text>
				<image class="commons__title__img" src="../../static/imgs/ic_arrow_green_right.png"></image>
			</view>
			<view class="commons__ratings">
				<view class="commons__ratings__stars">
					<text class="commons__ratings__stars__average">{{ average }}</text>
					<view class="commons__ratings__stars__wrapper">
						<image class="commons__ratings__stars__wrapper__img" v-for="(starItem, starItemIndex) in renderStars" :src="starItem" :key="starItemIndex">
					</view>
				</view>
			</view>
		</view>
		<view class="des">
			<view class="des__title">简介</view>
			<view class="dec__content" v-html="summary"></view>
		</view>
	</view>
</template>

<script>
import { getMovieDetailApi } from '../../apis/movies.js';
export default {
	data() {
		return {
			movieImg: 'http://p0.meituan.net/165.220/movie/238e2dc36beae55a71cabfc14069fe78236351.jpg',
			title: '我不是药神',
			genres: '剧情,喜剧',
			stars: '45',
			summary: '一位不速之客的意外到访，打破了神油店老板程勇（徐峥 饰）的平凡人生，他从一个交不起房租的男性保健品商贩，一跃成为印度仿制药“格列宁”的独家代理商。收获巨额利润的他，生活剧烈变化，被病患们冠以“药神”的称号。但是，一场关于救赎的拉锯战也在波涛暗涌中慢慢展开......',
			average: '9.7',
			durations: '117'
		};
	},
	async onLoad(options) {
		uni.showLoading({
			title:'正在加载中'
		})
		const data = await getMovieDetailApi(options.id);
		uni.hideLoading()
		const{movieImg,title,genres,stars,summary,average,durations} = data[0];
		uni.setNavigationBarTitle({
			title
		})
		this.movieImg=movieImg;
		this.title=title;
		this.genres=genres;
		this.stars=stars;
		this.summary=summary;
		this.average=average;
		this.durations=durations;
	},
	methods: {},
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
.details {
	background-color: #f5f4f9;
	padding: 40rpx;
	.header {
		display: flex;
		margin-bottom: 30rpx;
		&__img {
			margin-right: 30rpx;
			width: 200rpx;
			height: 280rpx;
			border-radius: 10rpx;
		}
		&__content {
			flex: 1;
			&__title {
				font-size: 50rpx;
				font-weight: bold;
				margin-bottom: 20rpx;
			}
			&__desc {
				color: #818181;
				font-size: 25rpx;
				margin-bottom: 40rpx;
			}
			&__innerWrapper {
				display: flex;
				justify-content: space-between;
				&__btn {
					font-weight: bold;
					font-size: 35rpx;
					line-height: 70rpx;
					width: 212rpx;
					height: 70rpx;
					border-radius: 10rpx;
					background-color: #ffffff;
					box-shadow: 0 2rpx 0 1rpx #dddce1;
				}
			}
		}
	}

	.commons {
		border-radius: 10rpx;
		background-color: #fff;
		padding: 20rpx;
		margin-bottom: 82rpx;
		&__title {
			font-weight: bold;
			font-size: 22rpx;
			display: flex;
			justify-content: space-between;
			margin-bottom: 38rpx;
			&__img {
				width: 15rpx;
				height: 24rpx;
			}
		}
		&__ratings {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			&__stars {
				margin-bottom: 40rpx;
				&__average {
					font-size: 50rpx;
					margin-bottom: 25rpx;
				}
				&__wrapper {
					display: flex;
					&__img {
						width: 28rpx;
						height: 28rpx;
					}
				}
			}
		}
	}
	.des{
		&__title{
			font-size: 40rpx;
			font-weight: bold;
			margin-bottom: 40rpx;
		}
		&__content{
			font-size: 30rpx;
		}
	}
}
</style>
