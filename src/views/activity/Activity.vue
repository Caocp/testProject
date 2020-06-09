<template>
  <div class="main">
    <van-nav-bar
      title="活动，缤纷乐e"
    >
    </van-nav-bar>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="listLoading"
                 :finished="listFinished"
                 finished-text="没有更多了"
                 @load="onLoad">
        <div class="container">
          <activity-card :activities="activities"></activity-card>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { NavBar, Icon, PullRefresh, List, Swipe, SwipeItem, Image, Toast } from 'vant'
import ActivityCard from '../components/Activity/ActivityCard'
import { listActivities } from '../../api/activity'
export default {
  name: 'Activity',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    ActivityCard
  },
  data () {
    return {
      refreshing: false,
      listLoading: false,
      listFinished: false,
      page: 1,
      pageSize: 5,
      activities: []
    }
  },
  activated () {
    this.$store.commit('SET_ACTIVE_TABBAR', 'activity')
  },
  methods: {
    async onLoad () {
      if (this.refreshing) {
        this.activities = []
        this.refreshing = false
      }
      if (this.listFinished) {
        return
      }
      await listActivities({ page: this.page, pageSize: this.pageSize }).then(res => {
        this.activities = this.activities.concat(res.data.data)
        this.page = res.data.pageNum + 1
        this.listFinished = !res.data.hasNextPage
      })
      this.listLoading = false
    },
    async onRefresh () {
      this.listFinished = false
      this.listLoading = true
      this.page = 1
      await this.onLoad()
      Toast('刷新成功')
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
