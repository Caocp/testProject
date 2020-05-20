<template>
  <div>
    <home v-if="active === 'home'"></home>
    <van-tabbar v-model="active" active-color="blue" inactive-color="#ccc">
      <van-tabbar-item name="home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item name="service" icon="service">服务</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends">活动</van-tabbar-item>
      <van-tabbar-item name="me" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import Home from './Home'
export default {
  name: 'Index',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    Home
  },
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style scoped>

</style>
