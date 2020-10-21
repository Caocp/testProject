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
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                >
                
                    <van-cell-group v-for='(item, index) in notificeDataList' :key="index">
                        <van-cell :title="item.title" :value="item.createTime" :label="item.content" />
                    </van-cell-group>
                </van-list>
            </van-pull-refresh>
        </div>
    </div>
</template>        

<script>
import { notifice } from '../../api/service'
export default {
    data () {
        return {
            notificeDataList:[],
            loading: false,
            finished: false,
            refreshing: false,
        }
        
    },
    created (){
        this.initData()
    },
    methods :{
        initData () {
            notifice().then(res => {
                this.notificeDataList = res.data
            })
        },
          onLoad() {
            if (this.refreshing) {
            this.notificeDataList = [];
            this.refreshing = false;
            }
            // for (let i = 0; i < 5; i++) {
            // this.notificeDataList.push(this.notificeDataList.length + 1);
            // }
            this.loading = false;
            if (this.notificeDataList.length >= 5) {
            this.finished = true;
            }
          },
        onRefresh() {
            // 清空列表数据
            this.finished = false;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
            },
        onClickLeft (){
            this.$router.go(-1);//返回上一层
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