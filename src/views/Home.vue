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
  </div>
</template>

<script>
import { NavBar, Icon } from 'vant'
export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  }
}
</script>
