<template>
  <view class="login">
    <view class="title">豆瓣帐号密码登录</view>
    <form @submit="login">
      <view class="input-wrapper">
        <input type="text" value="" name="username" placeholder="请输入用户名" />
        <input type="text" value="" name="password" placeholder="请输入密码" />
      </view>
      <button form-type="submit" type="primary">登录</button>
    </form>
    <view class="other-login">
      <view class="login-method">短信验证登录/注册</view>
      <view>海外手机密码登录</view>
    </view>
    <view class="forgot">忘记密码？找回密码</view>
  </view>
</template>

<script>
import { loginApi } from '../../apis/movies.js';
export default {
  data() {
    return {};
  },
  methods: {
    async login(e) {
      const params = e.detail.value;
      uni.showLoading({
        title: '正在登录中'
      });
      const data = await loginApi(params);
      const { token, userInfo } = data;
      if (token) {
        //把用户数据存到本地存储
        uni.showToast({
          title: '登录成功'
        });
        uni.setStorageSync('token', token);
        uni.setStorageSync('userInfo', JSON.stringify(userInfo));
        //跳转到首页
        uni.navigateTo({
          url: '/pages/home/home'
        });
      } else {
        uni.showToast({
          title: '密码错误',
          icon: 'none'
        });
      }
    }
  }
};
</script>

<style lang="scss">
page {
  height: 100%;
}
.login {
  position: relative;
  padding: 40rpx;
  box-sizing: border-box;
  height: 100%;
  .title {
    font-size: 55rpx;
    font-weight: bold;
    text-align-last: center;
    margin-bottom: 100rpx;
    margin-top: 100rpx;
    color: #494949;
  }
  .input-wrapper {
    margin-bottom: 40rpx;
    border-radius: 8rpx;
    border: 1px solid #ccc;
    input {
      line-height: 180rpx;
      font-size: 32rpx;
      &:first-child {
        border-bottom: 1px solid #ccc;
      }
      padding: 20rpx;
    }
  }

  .other-login {
    display: flex;
    justify-content: space-between;
    margin-top: 68rpx;
    color: #42bd56;
    font-size: 32rpx;
  }
  .forgot {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 90rpx;
    color: #576b95;
    font-size: 25rpx;
    font-weight: bold;
  }
}
</style>
