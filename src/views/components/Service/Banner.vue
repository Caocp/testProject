<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item, index) in msg" :key="index">
      <img v-lazy="item.image" :height="200" style="width: 100%"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
    props:['msg'],
    data(){
        return {

        }
    },
    created (){
        console.log(this.msg)
    }
}
</script>



