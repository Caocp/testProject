<template>
    <div class="card">
        <van-nav-bar
          title="通知管理"
          left-text=""
          right-text=""
          left-arrow
          @click-left="onClickLeft"
          style="position: fixed;width: 100%;"
        />
        <div style="padding-top: 45px;">
            <van-cell-group v-for='(item, index) in notificeDataList' :key="index">
                <van-cell :title="item.title" :value="item.createTime" :label="item.content" />
            </van-cell-group>
        </div>
        

    </div>
</template>        

<script>
import { notifice } from '../../api/service'
export default {
    data () {
        return {
            notificeDataList:[]
        }
        
    },
    created (){
        this.initData()
    },
    methods :{
        onClickLeft (){
            this.$router.go(-1);//返回上一层
        },
        initData () {
            notifice().then(res => {
                console.log(res.data)
                this.notificeDataList = res.data
            
            
            })
    },
    }
}
</script>


<style scoped>
  .card {
    margin-bottom: 10px;
    background-color: #FFF;
    /* padding: 10px; */
  }
  .name {
    margin: 5px 0 10px 10px;
    text-align: left;
  }
 
</style>