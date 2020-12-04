<template>
    <div class="card">
        <van-nav-bar
          title="头条"
          left-text=""
          right-text=""
          left-arrow
          @click-left="onClickLeft"
          style="position: fixed;width: 100%;"
        />
        <div style="padding-top: 45px;">
            <van-tabs v-model="activeName">
                <van-tab title="新闻动态" name="news">
                    <van-cell-group v-for="(item, index) in noticeListData" :key="index">
                        <van-cell :title="item.title" :label="item.createDate">
                            <template #right-icon>
                              <img :src="item.image" style="height: 80px;width:125px;" />
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-tab>
                <van-tab title="园区公告" name="announcement">
                    <van-cell-group v-for="(item, index) in noticeListData" :key="index">
                        <van-cell :title="item.title" :label="item.createDate">
                            <template #right-icon>
                              <img :src="item.image" style="height: 80px;width:125px;" />
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>   

<script>
import { getNoticesList } from '../../api/home'
export default {
    data () {
        return {
            activeName: 'news',
            noticeListData: []
        }
    },
    created () {
        this.initNoticesList()
    },
    methods :{
        onClickLeft () {
            this.$router.go(-1)
        },
        async initNoticesList () {
            await getNoticesList().then(res => {
                this.noticeListData = res.data
            })
        },
    }
}
</script>




