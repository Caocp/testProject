<template>
    <div class="card">
        <van-nav-bar
          title="活动详情"
          left-text=""
          right-text=""
          left-arrow
          @click-left="onClickLeft"
          style="position: fixed;width: 100%;"
        />
        <img v-for='img in imageList' v-lazy='img' style='height: 50vh;width: 95%;margin: 50px 10px 10px 10px;' />
        <p class="name van-ellipsis">{{result.name}}</p>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="报名内容" name="1">
            <van-row>
              <van-col span="12">报名时间：</van-col>
              <van-col span="12">{{result.time}}</van-col>
            </van-row>
            <van-row>
              <van-col span="12">报名人数：</van-col>
              <van-col span="12">{{result.canSignUpNum}}</van-col>
            </van-row>
            <van-row>
              <van-col span="12">活动费用：</van-col>
              <van-col span="12">{{result.cost}}</van-col>
            </van-row>
            <van-row>
              <van-col span="12">活动地点：</van-col>
              <van-col span="12">{{result.time}}</van-col>
            </van-row>
            <van-row>
              <van-col span="12">活动开始时间：</van-col>
              <van-col span="12">{{result.startTime}}</van-col>
            </van-row>
            <van-row>
              <van-col span="12">活动结束时间：</van-col>
              <van-col span="12">{{result.startTime2}}</van-col>
            </van-row>
            <van-row>
              <van-col span="12">发起人：</van-col>
              <van-col span="12">{{result.initiator}}</van-col>
            </van-row>
            <van-row>
              <van-col span="12">报名截止时间：</van-col>
              <van-col span="12">{{result.startTime2}}</van-col>
            </van-row>
          </van-collapse-item>
        </van-collapse>
        <div style="margin: 10px;">
          <h3>活动内容</h3>
          <div v-html="result.richText"></div>
        </div>
        <van-button type="primary" class="statusButton">{{result.status === 1?"我要报名":result.status === 2?"进行中":"已结束"}}</van-button>
        
    </div>
</template>

<script>
import { activityDate } from '../../api/activity'
export default {
    data () {
      return {
        id:null,
        result:{},
        activeNames: ['1'],
        imageList: [],
      }
    },
    created (){
      this.id = this.$route.query.id
      this.initData(this.id)
    },
    methods :{
      onClickLeft (){
        this.$router.go(-1);//返回上一层
      },
      initData (id) {
        const params = {
          id: id
        }
        activityDate(params).then(res => {
          this.result = res.data
          this.imageList.push(res.data.image) 
          
        })
    },
   
    }
}
</script>

<style scoped>
  .card {
    margin-bottom: 10px;
    background-color: #FFF;
    /* padding: 10px; */
  }
  .name {
    margin: 5px 0 10px 10px;
    text-align: left;
  }
  .time {
    margin: 0 20px 0 0;
  }
  .van-tag {
    padding: 7px 14px;
  }
  .statusButton {
    width: 80%;
    border-radius: 18px;
    margin-left: 10%;
    /* position: fixed; */
    z-index: 100;
    background-color: #8591ff;
    border:#8591ff;
  }
</style>