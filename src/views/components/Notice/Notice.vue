<template>
  <van-swipe :autoplay="3000"  style="height: 50px;" vertical :show-indicators="false" :touchable="false">
    <van-swipe-item v-for="(notice, index) in value.items" :key="index">
      <div class="notice" @click="onCmsDetail">
        <p class="title">{{notice.title}}</p>
        <!-- <div v-html="notice.text" class="desc"></div> -->
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { SwipeItem, Swipe } from 'vant'
export default {
  name: 'Notice',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
    value: {
      type: Object,
      defaultValue: {}
    }
  },
  methods :{
    onCmsDetail (){
      this.$router.push({
        path:'noticeNews',
        
      })
  }
  }
}
</script>

<style scoped>
  .notice {
    height: 40px
  }
  .notice>>> p {
    margin: 15px 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
