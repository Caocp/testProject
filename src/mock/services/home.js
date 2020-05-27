import Mock from 'mockjs2'
import { builder } from '../util'

const slideShows = [
  'https://www.hispsp.com/static/uploads/images/20200228/20200228163658519.png',
  'https://www.hispsp.com/static/uploads/images/20200228/20200228163431488.jpg',
  'https://www.hispsp.com/static/uploads/images/20180209/20180209134019097.jpg',
  'https://www.hispsp.com/static/uploads/images/20190419/20190419092255611.jpg'
]

const secondaryMenus = [
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
]

const notices = [{
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
}]
