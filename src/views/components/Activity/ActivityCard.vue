<template>
  <div>
    <div class="card" v-for="(activity, index) in activities" :key="index">
      <van-image :src="activity.image"></van-image>
      <p class="name van-ellipsis">{{activity.name}}</p>
      <van-row type="flex" justify="end" align="center">
          <p class="time">{{activity.time}}</p>
          <van-tag round :color="activity.status === 1 ? '#ff976a': '#969799'">{{activity.status | activityStatus}}</van-tag>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Image, Row, Col, Tag } from 'vant'
const activityStatus = [
  { status: 1, text: '报名中' },
  { status: 2, text: '活动结束' }
]
export default {
  name: 'ActivityCard',
  components: {
    [Image.name]: Image,
    [Row.name]: Row,
    [Col.name]: Col,
    [Tag.name]: Tag
  },
  filters: {
    activityStatus: function (value) {
      return activityStatus.filter(item => item.status === value).shift().text
    }
  },
  props: {
    activities: {
      type: Array
    }
  }
}
</script>

<style scoped>
  .card {
    margin-bottom: 10px;
    background-color: #FFF;
    padding: 10px;
  }
  .name {
    margin: 5px 0 10px 0;
    text-align: left;
  }
  .time {
    margin: 0 20px 0 0;
  }
  .van-tag {
    padding: 7px 14px;
  }
</style>
