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
        <!-- <Banner :msg='bannerData'></Banner> -->
    </div>
</template>

<script>
import Banner from '../components/Banner/Banner'
import { getNoticesList } from '../../api/home'
export default {
    data (){
        return {
            bannerData:[]
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
            console.log(data)
        }
    },
    components: {
        Banner
    }
}
</script>