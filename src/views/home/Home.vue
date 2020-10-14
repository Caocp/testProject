<template>
  <div class="home">
    <van-nav-bar
      title="测试网站"
      left-text=""
      style="position: fixed;width: 100%;"
    >
      <template #left>
        <van-dropdown-menu style="box-shadow:none;background:none;">
          <van-dropdown-item v-model="id" :options="option1" style="box-shadow:none;background:none;" />
        </van-dropdown-menu>
      </template>
      <template #right>
        <van-icon name="envelop-o" />
      </template>
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <template v-for="(module, index) in modules">
        <component v-bind:is="module.type | moduleFilter" :value="module.data" :key="index"></component>
      </template>
    </van-pull-refresh>
  </div>
</template>

<script>
import { NavBar, Icon, PullRefresh, Toast } from 'vant'
import { getHome } from '../../api/home'
import { parkDate } from '../../api/park'
const modules = {
  Banner: 'Banner',
  SecondaryMenu: 'SecondaryMenu',
  Notice: 'Notice',
  NavigateImage: 'NavigateImage',
  Activity: 'Activity'
}
export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [PullRefresh.name]: PullRefresh,
    Banner: () => import('@/views/components/Banner'),
    SecondaryMenu: () => import('@/views/components/SecondaryMenu'),
    Notice: () => import('@/views/components/Notice'),
    NavigateImage: () => import('@/views/components/NavigateImage'),
    Activity: () => import('@/views/components/Activity')
  },
  data () {
    return {
      refreshing: false,
      isLoading: false,
      modules: [],
      id: 3,
      option1: [],
    }
  },
  filters: {
    moduleFilter: function (val) {
      return modules[val]
    }
  },
  created () {
    this.init()
    this.initData()
  },
  activated () {
    this.$store.commit('SET_ACTIVE_TABBAR', 'home')
  },
  methods: {
    initData () {
      parkDate().then(res => {
        this.option1 = res.data
      })
    },
    async init () {
      await getHome().then(res => {
        console.log(res.data)
        this.modules = res.data
      })
    },
    async onRefresh () {
      await this.init()
      this.isLoading = false
      Toast('刷新成功')
    }
  }
}
</script>
<style scoped>
  .van-pull-refresh {
    min-height: calc(100vh - 50px);
    margin-bottom: 50px;
  }
</style>
