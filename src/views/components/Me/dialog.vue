<template>
    <!-- <div class="calendarShow" v-if="show"> -->
          <!-- <img src="../../../assets/jilubg.png" /> -->
          <van-calendar v-model="show" type="multiple" @confirm="onConfirm" />
        <!-- </div> -->
</template>



<script>
export default {
    data(){
        return{
            show:this.$parent.show
        }
    },
    created(){
        console.log(this.show)
    },
    methods:{
        onConfirm(date) {
      this.show = false;
      // this.time = `选择了 ${date.length} 个日期`;
      console.log(this.time)
    },
    }
}
</script>

<style scoped>
    .calendarShow{
    position: fixed;
    top: 45%;
    left: 50%;
    overflow: inherit;
    height: 350px;
    width: 250px;
    font-size: 16px;
    background-color: #fff;
    border-radius: 16px;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: .3s;
    transition: .3s;
    -webkit-transition-property: opacity,-webkit-transform;
    transition-property: opacity,-webkit-transform;
    transition-property: transform,opacity;
    transition-property: transform,opacity,-webkit-transform;
    z-index: 2000;
  }
  .calendarShow .van-overlay{
    background-color: initial;
  }
 

  .calendarShow img{
    width: 50%;
    position: absolute;
    top: -65px;
    left: 25%;
  }
</style>