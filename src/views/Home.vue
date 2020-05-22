<template>
  <div class="home">
    <van-nav-bar
      title="汇智e站"
      left-text="张江园"
    >
      <template #right>
        <van-icon name="envelop-o" />
      </template>
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-swipe :autoplay="3000" :height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image :src="image" lazy-load fit="fill" height="200" />
        </van-swipe-item>
      </van-swipe>
      <van-grid :column-num="5" >
        <van-grid-item v-for="(menu, index) in menus" :key="index" :icon="menu.image" :text="menu.text" />
      </van-grid>
      <van-swipe :autoplay="3000" style="height: 60px;" vertical :show-indicators="false">
        <van-swipe-item v-for="(notice, index) in notices" :key="index">
          <div class="notice">
            <p class="title">{{notice.title}}</p>
            <div v-html="notice.text" class="desc"></div>
          </div>
        </van-swipe-item>
      </van-swipe>
      <van-row>
        <van-col span="10">
          <van-image height="150px" fit="fill" :src="navigateImages[0]"></van-image>
        </van-col>
        <van-col span="14">
          <van-image height="73px" :src="navigateImages[1]"></van-image>
          <van-image height="73px" :src="navigateImages[2]"></van-image>
        </van-col>
      </van-row>
      <van-panel>
        <template #header>
          <p>-活动推荐-</p>
        </template>
        <template #default>
          <div v-for="(activity, index) in activities" :key="index">
            <van-image :src="activity.image"></van-image>
            <p class="name van-ellipsis">{{activity.name}}</p>
            <van-row type="flex" justify="end">
              <van-col>
                <span class="time">{{activity.time}}</span>
                <van-tag round type="warning">{{activity.status | activityStatus}}</van-tag>
              </van-col>
            </van-row>
          </div>
        </template>
      </van-panel>
    </van-pull-refresh>
  </div>
</template>

<script>
import { NavBar, Icon, PullRefresh, Swipe, SwipeItem, Image, Grid, GridItem, Toast, Row, Col, Panel, Tag } from 'vant'
const activityStatus = [
  { status: 1, text: '报名中' },
  { status: 2, text: '活动结束' }
]
export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [PullRefresh.name]: PullRefresh,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Panel.name]: Panel,
    [Tag.name]: Tag
  },
  filters: {
    activityStatus: function (value) {
      return activityStatus.filter(item => item.status === value).shift().text
    }
  },
  data () {
    return {
      isLoading: false,
      images: [
        'https://www.hispsp.com/static/uploads/images/20200228/20200228163658519.png',
        'https://www.hispsp.com/static/uploads/images/20200228/20200228163431488.jpg',
        'https://www.hispsp.com/static/uploads/images/20180209/20180209134019097.jpg',
        'https://www.hispsp.com/static/uploads/images/20190419/20190419092255611.jpg'
      ],
      menus: [
        {
          image: 'https://www.hispsp.com/static/services/tingchejiaofei.png',
          text: '停车缴费'
        },
        {
          image: 'https://www.hispsp.com/static/services/yuechaxun.png',
          text: '余额查询'
        },
        {
          image: 'https://www.hispsp.com/static/services/youchuanyuyue.png',
          text: '游船预约'
        },
        {
          image: 'https://www.hispsp.com/static/services/wuyebaoxiu.png',
          text: '物业报修'
        },
        {
          image: 'https://www.hispsp.com/static/services/saomafukuang.png',
          text: '扫码支付'
        }
      ],
      notices: [{
        title: '智能制造时代，图漾科技为机器打造“3D眼”',
        text: '<p>当前，人工智能理论和技术日益成熟，应用范围不断扩大，产业正在逐步形成、不断丰富，相应的商业模式也在持续演进和多元化。作为人工智能行业的最大组成部分，计算机视觉正成为该领域发展最快的细分领域。</p>'
      }, {
        title: '央视《全球财经》专访SAP：紧抓“新基建”机遇，助力中国企业转型',
        text: '<p style=\\"line-height: 2; text-align: justify;\\">&nbsp; &nbsp; &nbsp; 2020年，&ldquo;新基建&rdquo;成为中国经济热词，相关支持政策密集出台。在华外企普遍表示，&ldquo;新基建&rdquo;是未来产业升级发展必不可少的重要基础设施支撑，&ldquo;新基建&rdquo;相关产业的发展，将带动产业结构优化升级，提高社会资源配置的效率，推动中国经济高质量发展，并给自身带来更多发展机遇。</p>'
      }, {
        title: '上海浦东软件园园区海报张贴规则',
        text: '<p>为满足园区企业宣传推广需求，维护园区整洁、美观的整体形象，体现园区专业服务，特制定本规则。</p>'
      }, {
        title: '关于2020年高新技术企业认定（含入库培育） 相关政策宣讲会通知',
        text: '<p><strong>关于2020年高新技术企业认定（含入库培育）</strong></p>'
      }, {
        title: '原停车充值卡退款事宜',
        text: '<p>通&nbsp; 知  尊敬的园区停车充值卡用户：</p>'
      }, {
        title: '关于第六餐厅开放堂食的通知',
        text: '<p><strong>关于第六餐厅开放堂食的通知</strong></p>'
      }],
      navigateImages: ['https://www.hispsp.com/static/uploads/images/20191209/20191209162954973.png', 'https://www.hispsp.com/static/uploads/images/20191209/20191209163058146.png', 'https://www.hispsp.com/static/uploads/images/20191209/20191209163026563.png'],
      activities: [{
        name: '汇智健身中心—挑战减脂赢半年卡',
        image: 'https://www.hispsp.com/static/uploads/images/20200414/20200414170331572.jpg',
        time: '2020/04/16',
        status: 1
      }, {
        name: '乐活汇-笔尖缤纷绘画社   2020敬请期待哟！',
        image: 'https://www.hispsp.com/static/uploads/images/20191218/20191218100158082.jpg',
        time: '2020/06/10',
        status: 1
      }]
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>
<style scoped>
  .notice {
    height: 50px
  }
  .notice>>> p {
    margin: 5px 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .van-pull-refresh {
    min-height: calc(100vh - 50px);
    margin-bottom: 50px;
  }
</style>
