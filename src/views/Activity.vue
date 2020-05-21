<template>
  <div>
    <van-nav-bar
      title="活动，缤纷乐e"
    >
    </van-nav-bar>
    <van-pull-refresh>
      <p>activity</p>
    </van-pull-refresh>
  </div>
</template>

<script>
import { NavBar, Icon, PullRefresh, Swipe, SwipeItem, Image } from 'vant'
export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [PullRefresh.name]: PullRefresh,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image
  },
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/cat.jpeg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>
