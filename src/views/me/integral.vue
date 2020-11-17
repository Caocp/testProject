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
          <van-button type="info" style="width: 63%;border-radius: 12px;border: none;height: 30px;margin: 10px 20px;color: white;background: #1890ff;" @click="integralInfo">查看></van-button>
        </van-col>
      </van-row>
    </div>
    <div class="record">
      <img src="../../assets/qiaodaob.png" style="float:left;" />
      <div style="padding-left: 3%;width: 57%;float:left;">
        <p style='fontWeight:600'>你已累计签到<span style='color:#FFBA00'>{{userInfo.days}}天</span></p>
        <p>
          <span style="color:#999999;font-size:0.2rem;">{{time}}</span>
          <van-button style="color:#5398FF;margin-left: 10px;"  :value="time" @click="showDate()">查看详情</van-button>
        </p>
      </div>
      <!-- 打开日历 -->
      <Dialog :show='showModal' :v-on='upDataShowModal'></Dialog>

      <van-button style="width: 25%;border-radius: 15px;border: none;color: white;background: #FFBA00;height: 32px;" @click="immediatelyIntegral">立即签到</van-button>
      
      <van-dialog v-model="showIntegral" title="" :show-cancel-button='false' :show-confirm-button='false' :close-on-click-overlay='true' class="dialogModal">
        <img src="../../assets/jilubg.png" />
        <div style="width: 50%;margin: 17% auto;text-align: center;">
          <p>已成功签到<span style="color: rgb(255, 186, 0);font-size: 18px;">{{userInfo.days}}</span>天咯</p>
          <p>获得<span style="color: rgb(255, 186, 0);font-size: 18px;">1</span>积分</p>
        </div>
      </van-dialog>
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
import Dialog from '../components/Me/dialog'
export default {
name: "integral.vue",
  components: {
    Dialog
  },
  data(){
    return{
      userInfo:[],
      time:'',
      showModal: false,
      showIntegral:false,
    }
  },
  created(){
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
    this.time=moment(new Date()).format("YYYY年MM月DD日")
  },
  
  methods:{
    upDataShowModal(e){
      console.log(e)
      this.showModal = e
    },
    showDate(){
      this.showModal = true;
    },
    immediatelyIntegral(){
      this.showIntegral = true
    },
    
    onClickLeft(){
      this.$router.go(-1)
    },
    integralInfo(){
      this.$router.push({  
        path:'/integralInfo',   
        query:{           
          integralNum:this.userInfo.integralNum , 
        }
      })
    },
    
    
  }
}

</script>

<style scoped>
   .dialogModal{
    overflow:inherit;
    height: 150px;
    width: 250px;
  }
  .header{
    height: 300px;
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
  .dialogModal img{
    width: 50%;
    position: absolute;
    top: -65px;
    left: 25%;
  }
</style>
