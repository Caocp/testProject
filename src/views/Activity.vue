<template>
  <div class="main">
    <van-nav-bar
      title="活动，缤纷乐e"
    >
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="container">
        <activity-card :activities="activities"></activity-card>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { NavBar, Icon, PullRefresh, Swipe, SwipeItem, Image, Toast } from 'vant'
import ActivityCard from '../components/ActivityCard'
export default {
  name: 'Activity',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [PullRefresh.name]: PullRefresh,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    ActivityCard
  },
  data () {
    return {
      isLoading: false,
      activities: [{
        name: '汇智健身中心—挑战减脂赢半年卡',
        image: 'https://www.hispsp.com/static/uploads/images/20200414/20200414170331572.jpg',
        time: '2020/04/16',
        status: 1
      }, {
        name: '乐活汇-笔尖缤纷绘画社   2020敬请期待哟！',
        image: 'https://www.hispsp.com/static/uploads/images/20191218/20191218100158082.jpg',
        time: '2020/06/10',
        status: 1
      }, {
        name: '活动报名 | 浦东新区专利快速审查及维权培训会',
        image: 'https://www.hispsp.com/static/uploads/images/20191120/20191120101721612.jpg',
        time: '2020/04/16',
        status: 2
      }, {
        name: '第四餐厅-东南亚风情美食节邀您来品尝',
        image: 'https://www.hispsp.com/static/uploads/images/20191202/20191202104313967.jpg',
        time: '2020/06/10',
        status: 1
      }]
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .main {
    background: #eee;
    min-height: calc(100vh - 50px);
    margin-bottom: 50px;
  }
</style>
