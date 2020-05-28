<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar v-model="active" active-color="#004897" inactive-color="#C3C3C3">
      <van-tabbar-item name="home" to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item name="service" to="/service" icon="service">服务</van-tabbar-item>
      <van-tabbar-item name="activity" to="/activity" icon="friends">活动</van-tabbar-item>
      <van-tabbar-item name="me" to="/me" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import storage from 'store'
export default {
  name: 'TabbarLayout',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: this.$store.getters.activeTabbar ? this.$store.getters.activeTabbar : storage.get('active_tab_bar')
    }
  },
  computed: {
    activeTabBar () {
      return this.$store.getters.activeTabbar ? this.$store.getters.activeTabbar : storage.get('active_tab_bar')
    }
  },
  watch: {
    activeTabBar (value) {
      this.active = value
    }
  }
}
</script>

<style scoped>

</style>
