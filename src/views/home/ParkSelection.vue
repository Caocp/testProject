<template>
    <div>
        <a-card title="选择园区">
            <a-card-grid style="width:100%;text-align:left">
                <h3>当前所在园区</h3>
                <a-button>{{nowPark}}</a-button>
            </a-card-grid>
            <a-card-grid style="width:100%;text-align:left" :hoverable="false">
                <h3>所有园区</h3>
                <a-button v-for="item in park" :key="item.id" class="item" @click="selectPark(item)">{{item.name}}</a-button>
            </a-card-grid>
        </a-card>
    </div>
</template>
<script>
import { parkDate } from '../../api/park'
export default {
data () {
    return {
      park: [],
      nowPark:''
    }
  },
  created () {
    this.initData()
    this.nowPark = '张江园'
  },
  methods: {
    initData () {
      parkDate().then(res => {
        this.park = res.data
      })
    },
    selectPark (item) {
        this.nowPark = item.name
        setTimeout(function(){
            window.location.href = '#/Home'
        },1000)
        
    }
  }
}
</script>
<style scoped>
    .item{
        margin-right: 20px;
    }
</style>