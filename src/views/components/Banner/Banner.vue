<template>
  <van-swipe :autoplay="3000" :height="200">
    <van-swipe-item v-for="(image, index) in value.items" :key="index">
      <van-image :src="image" lazy-load fit="fill" height="200" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem, Image } from 'vant'
export default {
  name: 'Banner',
  props: {
    value: {
      type: Object,
      defaultValue: []
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image
  }
}
</script>

<style scoped>

</style>
