<template>
    <div class="card">
        <van-nav-bar
        title="活动详情"
        >
        </van-nav-bar>
        <img src='../../../assets/logo.png' alt=""  />
        <p class="name van-ellipsis">活动名称</p>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="报名时间" name="1">
            <p class="time">报名时间：2020-10-13</p>
            <p class="time">报名人数：不限</p>
            <p class="time">活动费用：免费</p>
            <p class="time">活动地点：线上活动平台</p>
            <p class="time">活动开始时间：2020-10-13</p>
            <p class="time">活动结束时间：2020-10-14</p>
            <p class="time">发起人：张三</p>
            <p class="time">报名截止时间：2020-10-14</p>
          </van-collapse-item>
        </van-collapse>
        <van-row type="flex" justify="end" align="left">
            <p class="time">活动内容</p>
        </van-row>
    </div>
</template>

<script>
import { activityDate } from '../../../api/activity'
export default {
    data () {
      return {
        id:null,
        result:{},
        activeNames: ['1'],
      }
    },
    created (){
      this.id = this.$route.query.id
      console.log(this.id)
      this.initData(this.id)
    },
    methods :{
      initData (id) {
        const params = {
          id: id
        }
        activityDate(params).then(res => {
          console.log(res.data)
          // this.result = res.data
        })
    },
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