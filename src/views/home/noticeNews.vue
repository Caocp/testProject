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
                    新闻动态 1

                </van-tab>
                <van-tab title="园区公告" name="announcement">
                    园区公告 2
                </van-tab>
                
            </van-tabs>
        </div>
    </div>
</template>   

<script>

export default {
    data () {
        return {
            activeName: 'news',
        }
    }
}
</script>




