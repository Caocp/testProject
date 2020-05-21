<template>
  <div class="home">
    <van-nav-bar
      title="汇智e站"
      left-text="张江园"
    >
      <template #right>
        <van-icon name="envelop-o" />
      </template>
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-swipe :autoplay="3000" :height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image :src="image" lazy-load fit="fill" height="200" />
        </van-swipe-item>
      </van-swipe>
      <van-grid :column-num="5" >
        <van-grid-item v-for="(menu, index) in menus" :key="index" :icon="menu.image" :text="menu.text" />
      </van-grid>
    </van-pull-refresh>
  </div>
</template>

<script>
import { NavBar, Icon, PullRefresh, Swipe, SwipeItem, Image, Grid, GridItem, Toast } from 'vant'
export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [PullRefresh.name]: PullRefresh,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data () {
    return {
      isLoading: false,
      images: [
        'https://www.hispsp.com/static/uploads/images/20200228/20200228163658519.png',
        'https://www.hispsp.com/static/uploads/images/20200228/20200228163431488.jpg',
        'https://www.hispsp.com/static/uploads/images/20180209/20180209134019097.jpg',
        'https://www.hispsp.com/static/uploads/images/20190419/20190419092255611.jpg'
      ],
      menus: [
        {
          image: 'https://www.hispsp.com/static/services/tingchejiaofei.png',
          text: '停车缴费'
        },
        {
          image: 'https://www.hispsp.com/static/services/yuechaxun.png',
          text: '余额查询'
        },
        {
          image: 'https://www.hispsp.com/static/services/youchuanyuyue.png',
          text: '游船预约'
        },
        {
          image: 'https://www.hispsp.com/static/services/wuyebaoxiu.png',
          text: '物业报修'
        },
        {
          image: 'https://www.hispsp.com/static/services/saomafukuang.png',
          text: '扫码支付'
        }
      ]
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>
