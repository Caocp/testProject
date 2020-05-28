<template>
  <div class="home">
    <van-nav-bar
      title="服务，便捷简e"
    >
    </van-nav-bar>
    <van-panel v-for="(menu, index) in menus" :title="menu.title" :key="index">
      <van-grid :column-num="4" >
        <van-grid-item v-for="(item, index) in menu.items" :key="index" :icon="item.icon" :text="item.name" />
      </van-grid>
    </van-panel>
  </div>
</template>

<script>
import { NavBar, Panel, Grid, GridItem, Image } from 'vant'
import { listMenus } from '@/api/service'

export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [GridItem.name]: GridItem,
    [Grid.name]: Grid,
    [Image.name]: Image
  },
  data () {
    return {
      menus: []
    }
  },
  created () {
    this.initData()
  },
  activated () {
    this.$store.commit('SET_ACTIVE_TABBAR', 'service')
  },
  methods: {
    initData () {
      listMenus().then(res => {
        this.menus = res.data
      })
    }
  }
}
</script>
