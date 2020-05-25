<template>
  <div class="home">
    <van-nav-bar
      title="服务，便捷简e"
    >
    </van-nav-bar>
    <van-panel v-for="(menu, index) in menus" :title="menu.title" :key="index">
      <van-grid :column-num="4" >
        <van-grid-item v-for="(item, index) in menu.items" :key="index" :icon="item.icon" :text="item.name" />
      </van-grid>
    </van-panel>
  </div>
</template>

<script>
import { NavBar, Panel, Grid, GridItem, Image } from 'vant'
export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [GridItem.name]: GridItem,
    [Grid.name]: Grid,
    [Image.name]: Image
  },
  data () {
    return {
      menus: [
        {
          title: '基础生活服务',
          items: [{
            name: '汇智健身中心',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163509541.png'
          }, {
            name: '充值',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163541021.png'
          }, {
            name: '停车申请',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163415902.png'
          }, {
            name: '智慧党建',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163012528.png'
          }, {
            name: '智慧工建',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163250461.png'
          }, {
            name: '停车缴费',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163310024.png'
          }, {
            name: '余额查询',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008162921336.png'
          }, {
            name: '游船预约',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163747541.png'
          }, {
            name: '物业报修',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163728085.png'
          }, {
            name: '测评报告',
            icon: 'https://www.hispsp.com/static/uploads/images/20191207/20191207025330054.png'
          }]
        },
        {
          title: '技术网络服务',
          items: [{
            name: 'IT网络报修',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163626536.png'
          }, {
            name: '扫码付款',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163609632.png'
          }]
        },
        {
          title: '商务营运服务',
          items: [{
            name: '会议室预订',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163647623.png'
          }, {
            name: '广告服务申请',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163707427.png'
          }, {
            name: '展厅预约',
            icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163346406.png'
          }]
        }
      ]
    }
  }
}
</script>
