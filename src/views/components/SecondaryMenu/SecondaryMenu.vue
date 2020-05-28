<template>
  <van-grid :column-num="5" >
    <van-grid-item v-for="(menu, index) in value.items" :key="index" :icon="menu.image" :text="menu.text" />
  </van-grid>
</template>

<script>
import { Grid, GridItem } from 'vant'
export default {
  name: 'SecondaryMenu',
  props: {
    value: {
      type: Object,
      defaultValue: {}
    }
  },
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  }
}
</script>

<style scoped>

</style>
