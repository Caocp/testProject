<template>
  <div class="home">
    <van-nav-bar
      title="个人中心"
    >
    </van-nav-bar>
    <div class="header">
      <van-row type="flex" justify="end" align="center" @click="integral(myInfo.name)">
        <van-image :height="30" :width="40" fit="contain" :src="require('@/assets/integral.png')"/><p class="sign">积分签到</p>
      </van-row>
      <van-row type="flex" align="center">
        <van-image class="avatar" round :height="100" :width="100" :src="myInfo.avatar"/><p class="name">{{myInfo.name}}</p>
      </van-row>
      <van-grid :column-num="3">
        <van-grid-item text="我的积分">
          <template #icon>
            <p>{{myInfo.integralNum}}</p>
          </template>
        </van-grid-item>
        <van-grid-item text="测试卡">
          <template #icon>
            <p>未绑定</p>
          </template>
        </van-grid-item>
        <van-grid-item text="我的卡券">
          <template #icon>
            <p>0</p>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <div>
      <van-cell-group>
        <van-cell title="我参加的活动" :icon="require('@/assets/favor.png')" is-link />
        <van-cell title="我申请的服务" :icon="require('@/assets/tag.png')" is-link />
        <van-cell title="我的服务评价" :icon="require('@/assets/comment.png')" is-link />
        <van-cell title="我的资料" :icon="require('@/assets/material.png')" is-link to='personInfor' />
        <van-cell title="我的小智" :icon="require('@/assets/message.png')" is-link />
        <van-cell title="通知管理" :icon="require('@/assets/mail.png')" is-link to='NotificeManagement' />
        <van-cell title="设置" :icon="require('@/assets/setting.png')" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { NavBar, Image, Row, Col, Grid, GridItem, CellGroup, Cell } from 'vant'
import { getUserInfo } from '../../api/login'
export default {
  name: 'Me',
  components: {
    [NavBar.name]: NavBar,
    [Image.name]: Image,
    [Row.name]: Row,
    [Col.name]: Col,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  },
  data () {
    return {
      myInfo:[]
    }
  },
  computed: {
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  created () {
    this.getUserInfo()
  },
  activated () {
    this.$store.commit('SET_ACTIVE_TABBAR', 'me')
  },
  methods:{
    async getUserInfo () {
            await getUserInfo().then(res => {
              this.myInfo = res
              console.log(res)
              window.sessionStorage.setItem("userInfo", JSON.stringify(res));
            })
        },
    integral(item){
      console.log(item)
      this.$router.push({
        path:'Integral',
      })
    }
  }
}
</script>
<style scoped>
  .avatar {
    margin: 0 20px 0 10px;
  }
  .sign {
    margin-right: 10px;
    color: #e0a942;
  }
</style>
