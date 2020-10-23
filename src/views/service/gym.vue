<template>
    <div>
        <van-nav-bar
          title="健身中心"
          left-text=""
          right-text=""
          left-arrow
          @click-left="onClickLeft"
          style="position: fixed;width: 100%;"
        />
        <Banner :msg='bannerData'></Banner>
        <h4 style="display: inline-block;padding: 10px;color: #ff753c;font-size: 20px;font-weight: 700;">优惠活动</h4>
        <van-tabs v-model="active">
            <van-tab title="场地介绍"><img src='../../assets/developing.png' style="height: 200px;position: absolute;left: 30%;top: 60px;" /></van-tab>
            <van-tab title="查看课表"><img src='../../assets/developing.png' style="height: 200px;position: absolute;left: 30%;top: 60px;" /></van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Banner from '../components/Service/Banner'
import { getNoticesList } from '../../api/home'
export default {
    components: {
        Banner
    },
    data (){
        return {
            bannerData:[],
            active: 2,
        }
    },
    created(){
        this.initBanner()
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        async initBanner () {
            const { data } = await getNoticesList()
            this.bannerData = data
        }
    },
    
}
</script>