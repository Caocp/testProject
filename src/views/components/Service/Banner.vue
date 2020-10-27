<template>
  <van-swipe :autoplay="3000" :height="200">
    <van-swipe-item v-for="(item, index) in msg" :key="index">
      <van-image :src="item.image" lazy-load fit="fill" height="200" />
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



