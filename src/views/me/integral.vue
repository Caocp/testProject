<template>
  <div class="card">
    <van-nav-bar
      title="积分签到"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="header">
      <van-row style="margin-left: 18%;padding-top: 20%;">
        <van-col span:12 style="color: #f9cb4b;font-size: 25px;">{{userInfo.integralNum}}</van-col>
        <van-col span:12>
          <button style="width: 60px;border-radius: 12px;border: none;margin: 10px 20px;color: white;background: #1890ff;">查看></button>
        </van-col>
      </van-row>
    </div>
    <div class="record">
      <img src="../../assets/qiaodaob.png" style="float:left;" />
      <div style="padding-left: 3%;width: 57%;float:left;">
        <p style='fontWeight:600'>你已累计签到<span style='color:#FFBA00'>{{userInfo.days}}天</span></p>
        <p><span style="color:#999999;font-size:0.2rem;">{{time}}</span><span style="color:#5398FF;margin-left: 10px;">查看详情</span></p>
      </div>
      <button style="width: 25%;border-radius: 15px;border: none;color: white;background: #FFBA00;height: 32px;">立即签到</button>
    </div>
    <div class="integralRule">
      <div style="text-align: center;font-size: 16px;font-weight: 700;margin-bottom: 20px;">查看积分规则</div>
      <p>1、注册绑定手机号即送10积分，完善个人资料赠送5积分，绑定汇智卡赠送50积分。</p>
      <p>2、注册绑定手机号即送10积分，完善个人资料赠送5积分，绑定汇智卡赠送50积分。</p>
      <p>3、注册绑定手机号即送10积分，完善个人资料赠送5积分，绑定汇智卡赠送50积分。</p>
      <p>4、注册绑定手机号即送10积分，完善个人资料赠送5积分，绑定汇智卡赠送50积分。</p>
      <p>5、注册绑定手机号即送10积分，完善个人资料赠送5积分，绑定汇智卡赠送50积分。</p>
      
    </div>
  </div>

</template>

<script>
import moment from 'moment';
export default {
name: "integral.vue",
  data(){
    return{
      userInfo:[],
      time:''
    }
  },
  created(){
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
   this.time=moment(new Date()).format("YYYY年MM月DD")+"日"
  },
  
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  }
}

</script>

<style scoped>
  .header{
    height: 300px;
    /* background: darkgrey; */
    background:url('../../assets/qiandaobg.png') no-repeat;
    background-size: 100%;
  }
  .record{
    width: 90%;
    height: 100px;
    background: white;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 1px 20px 0px rgba(38,38,38,0.15);
    margin-top: -12%;
    margin-left: 5%;
    padding: 20px 10px;
  }
  .integralRule{
    height: 400px;
    position: relative;
    border: 1px solid slategrey;
    width: 90%;
    border-radius: 10px;
    margin: 10% auto;
    padding: 20px;
  }
  .integralRule p{
    color:rgb(153, 153, 153);
  }
</style>
