<template>
  <van-panel>
    <template #header>
      <p class="title">-{{value.title}}-</p>
    </template>
    <template #default>
      <activity-card :activities="value.items"></activity-card>
    </template>
  </van-panel>
</template>

<script>
import { Panel } from 'vant'
import ActivityCard from './ActivityCard'
export default {
  name: 'Activity',
  props: {
    value: {
      type: Object,
      defaultValue: {}
    }
  },
  components: {
    [Panel.name]: Panel,
    ActivityCard
  }
}
</script>

<style scoped>
  .title {
    margin: 0;
    padding: 15px 0 10px 0;
    text-align: center;
  }
</style>
