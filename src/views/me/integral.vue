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
      <van-row>
        <van-col span:12>积分：315</van-col>
        <van-col span:12>
          <button>查看</button>
        </van-col>
      </van-row>
    </div>
    <div class="record">
      你已累计签到1天
    </div>
    <div class="integralRule">
      积分规则
    </div>
  </div>

</template>

<script>
export default {
name: "integral.vue",
  data(){
    return{

    }
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
    background: darkgrey;
  }
  .record{
    width: 80%;
    height: 100px;
    background: red;
    /* margin: auto; */
    border-radius: 10px;
    position: absolute;
    left: 10%;
    top: 45%;
  }
  .integralRule{
    height: 400px;
    position: relative;
    /* top: 76%; */
    background: slategrey;
    width: 90%;
    /* left: 5%; */
    border-radius: 10px;
    margin: 20% auto;
  }
</style>
