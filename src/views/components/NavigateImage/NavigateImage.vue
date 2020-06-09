<template>
  <van-row v-if="value.items.length === 3">
    <van-col span="10">
      <van-image height="150px" fit="fill" :src="value.items[0]"></van-image>
    </van-col>
    <van-col span="14">
      <van-image height="73px" :src="value.items[1]"></van-image>
      <van-image height="73px" :src="value.items[2]"></van-image>
    </van-col>
  </van-row>
</template>

<script>
import { Row, Col, Image } from 'vant'
export default {
  name: 'NavigateImage',
  props: {
    value: {
      type: Object,
      defaultValue: {}
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Image.name]: Image
  }
}
</script>

<style scoped>

</style>
