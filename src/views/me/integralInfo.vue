<template>
    <div class="card">
        <van-nav-bar
        title="查看积分签到"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="header">
            <p style="color:#FFD52C;font-size: 35px;position: relative;padding-top: 23%;padding-left: 43%;">{{integralNum}}</p>
        </div>
        <div>
            <van-tabs>
                <van-tab title="到账记录">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                            v-model="loading"
                            :finished="finished"
                            finished-text="没有更多了"
                            @load="onLoad()"
                            >
                            <van-cell v-for="item in arriveList" :key="item">
                                <div style="width: 85%;float: left;">
                                    <p style="color: rgb(83, 152, 255);margin: 0px;">{{item.integralName}}</p>
                                    <span style="color:rgb(153, 153, 153)">{{item.updateDate}}</span>
                                </div>
                                <div style="width: 15%;float: left;">
                                    <span style="color:red;">{{item.num}}</span>
                                    <img src="../../assets/jimoney.png" style="width: 35%;margin-left: 20%;" />
                                </div>
                            </van-cell>    
                        </van-list>
                    </van-pull-refresh>
                </van-tab>
                <van-tab title="消费记录">
                    <van-pull-refresh v-model="refreshing" >
                        <van-list>
                            <van-cell>
                                <span>暂无数据</span>
                            </van-cell>
                        </van-list>
                    </van-pull-refresh>
                </van-tab>
                
            </van-tabs>
        </div>
    </div>

</template>

<script>
import { integralList } from '../../api/service'
export default {
    data(){
        return{
            active: 2,
            integralNum:'',
            arriveList: [],
            consumptionList:[],
            finished: false,
            loading: false,
            refreshing: false,
            page: 1,
            pageSize: 5,
        }
    },
    created (){
        // this.integralList()
        this.integralNum = this.$route.query.integralNum
    },
    methods:{
        async onLoad() {
            if (this.refreshing) {
              this.arriveList = [];
              this.refreshing = false;
            }
            if (this.finished) {
              return;
            }
            const param = {
              page: this.page,
              pageSize: this.pageSize
            }
            await integralList(param).then(res => {
              console.log(res);
              this.arriveList = this.arriveList.concat(res.data.data);
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
        onClickLeft(){
            this.$router.go(-1)
        },
    }

}
</script>

<style scoped>
    .header{
    height: 243px;
    background:url('../../assets/jifen.jpg') no-repeat;
    background-size: 100%;
  }
</style>