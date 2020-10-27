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
            page: 1,
            pageSize: 15,
        }

    },
    created (){
    },
    methods :{
          async onLoad() {
            if (this.refreshing) {
              this.notificeDataList = [];
              this.refreshing = false;
            }
            if (this.finished) {
              return;
            }
            const param = {
              page: this.page,
              pageSize: this.pageSize
            }
            await notifice(param).then(res => {
              console.log(res.data);
              this.notificeDataList = this.notificeDataList.concat(res.data.data);
              this.page = res.data.pageNum + 1;
              this.finished = !res.data.hasNextPage;
            })
            this.loading = false;
          },
        onRefresh() {
            // 清空列表数据
            this.finished = false;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.page = 1;
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
