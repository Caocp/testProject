import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const activities = [
  {
    id: '21',
    name: '黄花独带露，红叶已随秋',
    image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3949795358,4226890838&fm=26&gp=0.jpg',
    time: '2017/03/09',
    status: 1,
    startTime: "2020/06/29 12:00:00",
    startTime2: "2020/12/31 23:55:00",
    canSignUpNum: "不限",
    cost: "免费",
    initiator: "杨婷",
    richText: '落叶飘零，不是树的不挽留，而是叶对根的深情；飘零落叶，也不是叶的执著，而是根对树叶的眷恋'
  },
  {
    id: '41',
    name: '家常菜做法大全',
    image: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4138427122,3046517531&fm=26&gp=0.jpg',
    time: '2020/06/10',
    status: 1,
    startTime: "2020/06/29 12:00:00",
    startTime2: "2020/12/31 23:55:00",
    canSignUpNum: "不限",
    cost: "免费",
    initiator: "无名氏",
    richText: '家常菜，是指家庭日常制作食用的菜肴。家常菜是中国菜的源头，也是地方风味菜系的组成基础。家庭利用现有的调味品也可以炒制出来的菜肴。'
  },
  {
  id: '1',
  name: '健身中心—挑战减脂赢半年卡',
  image: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1202746753,1306796838&fm=26&gp=0.jpg',
  time: '2020/04/16',
  status: 1,
  startTime: "2020/06/29 12:00:00",
  startTime2: "2020/12/31 23:55:00",
  canSignUpNum: "不限",
  cost: "免费",
  initiator: "无名氏",
  richText: '<p><img alt="" src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1202746753,1306796838&fm=26&gp=0.jpg" style="height:200px; width:98%" /></p><p><span style="color:#FF0000"><span style="font-size:20px"><strong>绘画社将在2020年中旬开课。具体开班时间及课程费用会在报名时公布，尽情期待。。。</strong></span></span></p>'
}, {
  id: '2',
  name: '刘亦菲新作品   2020敬请期待哟！',
  image: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2692768759,2948708730&fm=26&gp=0.jpg',
  time: '2020/06/10',
  status: 1,
  startTime: "2020/06/29 12:00:00",
  startTime2: "2020/12/31 23:55:00",
  canSignUpNum: "不限",
  cost: "免费",
  initiator: "无名氏",
  richText: '刘亦菲父亲安少康是武汉大学法文系教授，母亲刘晓莉是国家一级舞蹈演员。当年，年仅8岁的刘亦菲在中南商都第二届“童花杯”童装模特大奖赛中获得冠军，刘亦菲十岁时，她的父母离异，刘亦菲便从武汉市江岸区鄱阳街小学退学，赴美国读书。现今刘亦菲仍是美国国籍，因念书关系及待在美国时间较长，所以国籍介改为美国。但她自己强调，自己是个中国人。'
}, {
  id: '3',
  name: '赵丽颖个人写真',
  image: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2848081370,4062705940&fm=26&gp=0.jpg',
  time: '2020/04/16',
  status: 2,
  startTime: "2020/06/29 12:00:00",
  startTime2: "2020/12/31 23:55:00",
  canSignUpNum: "不限",
  cost: "免费",
  initiator: "无名氏",
  richText: '赵丽颖，1987年10月16日出生于河北省廊坊市，中国内地影视女演员、歌手。'
},  {
  id: '4',
  name: '单车骑行 骑乐无穷',
  image: 'http://www.yshsports.com/uploads/allimg/2020-05/111Q943-1-1H19.jpg',
  time: '2017/04/01',
  status: 1,
  startTime: "2020/06/29 12:00:00",
  startTime2: "2020/12/31 23:55:00",
  canSignUpNum: "不限",
  cost: "免费",
  initiator: "无名氏",
  richText: '【单车骑行 骑乐无穷】美味团建之旅-一天拓展'
}, {
  id: Mock.mock('@guid'),
  name: '汉服文化交流会',
  image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1842612544,4259852029&fm=11&gp=0.jpg',
  time: '2017/03/15',
  status: 1,
  startTime: "2020/06/29 12:00:00",
  startTime2: "2020/12/31 23:55:00",
  canSignUpNum: "不限",
  cost: "免费",
  initiator: "杨婷",
  richText: '汉服文化，传承千年'
}, {
  id: Mock.mock('@guid'),
  name: '中国科技',
  image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3546659227,2240359170&fm=26&gp=0.jpg',
  time: '2017/03/25',
  status: 2,
  startTime: "2020/06/29 12:00:00",
  startTime2: "2020/12/31 23:55:00",
  canSignUpNum: "不限",
  cost: "免费",
  initiator: "杨婷",
  richText: '科技引领未来'
}, {
  id: Mock.mock('@guid'),
  name: '中国茶文化',
  image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3465216241,2188347147&fm=26&gp=0.jpg',
  time: '2017/03/09',
  status: 1,
  startTime: "2020/06/29 12:00:00",
  startTime2: "2020/12/31 23:55:00",
  canSignUpNum: "不限",
  cost: "免费",
  initiator: "杨婷",
  richText: '茶文化意为饮茶活动过程中形成的文化特征，包括茶道、茶德、茶精神、茶联、茶书、茶具、茶谱、茶诗、茶画、茶学、茶故事、茶艺等等。茶文化起源地为中国。中国是茶的故乡，中国饮茶，据说始于神农时代，少说也有4700多年了。'
}, {
  id: Mock.mock('@guid'),
  name: '关于“创新基金政策宣讲会”的通知',
  image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1044642960,2947045994&fm=26&gp=0.jpg',
  time: '2017/03/25',
  status: 2,
  startTime: "2020/06/29 12:00:00",
  startTime2: "2020/12/31 23:55:00",
  canSignUpNum: "不限",
  cost: "免费",
  initiator: "杨婷",
  richText: '是利用市级财政科技资金，支持企业、团队向服务机构购买专业服务（战略规划、技术研发、技术转移、检验检测、人才培养、资源开放等）的一种政策工具'
},  {
  id: Mock.mock('@guid'),
  name: '“浓情端午，寻找不同的你',
  image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2476396715,3377344833&fm=26&gp=0.jpg',
  time: '2017/03/25',
  status: 2,
  startTime: "2020/06/29 12:00:00",
  startTime2: "2020/12/31 23:55:00",
  canSignUpNum: "不限",
  cost: "免费",
  initiator: "杨婷",
  richText: '端午节，又称端阳节、龙舟节、重午节、龙节、正阳节、天中节等，源自天象崇拜，由上古时代祭龙演变而来。仲夏端午，苍龙七宿飞升至正南中天，是龙飞天的吉日，即如《易经·乾卦》第五爻的爻辞曰：“飞龙在天”。端午日龙星既“得中”又“得正”，乃大吉大利之象。其起源涵盖了古老星象文化、人文哲学等方面内容，蕴含着深邃丰厚的文化内涵；在传承发展中杂揉了多种民俗为一体，节俗内容丰富'
}, {
  id: Mock.mock('@guid'),
  name: '鹊桥相会，情定七夕',
  image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3108475971,2917961394&fm=26&gp=0.jpg',
  time: '2017/03/09',
  status: 1,
  startTime: "2020/06/29 12:00:00",
  startTime2: "2020/12/31 23:55:00",
  canSignUpNum: "不限",
  cost: "免费",
  initiator: "杨婷",
  richText: '七夕节，又称七巧节、七姐节、女儿节、乞巧节、七娘会、七夕祭、牛公牛婆日、巧夕等，是中国民间的传统节日。七夕节由星宿崇拜衍化而来，为传统意义上的七姐诞，因拜祭“七姐”活动在七月七晩上举行，故名“七夕”。拜七姐，祈福许愿、乞求巧艺、坐看牵牛织女星、祈祷姻缘、储七夕水等，是七夕的传统习俗。经历史发展，七夕被赋予了“牛郎织女”的美丽爱情传说，使其成为了象征爱情的节日，从而被认为是中国最具浪漫色彩的传统节日，在当代更是产生了“中国情人节”的文化含义。'
}]

const listActivities = (options) => {
  const parameters = getQueryParameters(options)
  console.log('queryParameters', parameters)
  if (parameters && !parameters.page) {
    parameters.page = 1
  }
  if (parameters && !parameters.pageSize) {
    parameters.pageSize = 4
  }
  const startNum = (parameters.page - 1) * parameters.pageSize
  const totalNumber = activities.length
  const data = []
  for (let i = 0, index = startNum; i < parameters.pageSize && index < totalNumber; index++, i++) {
    data.push(activities[index])
  }
  const pages = Math.ceil(activities.length / parameters.pageSize)
  const pageInfo = {
    hasNextPage: parameters.page < pages,
    total: activities.length,
    pageSize: parseInt(parameters.pageSize),
    pages: pages,
    pageNum: parseInt(parameters.page),
    data: data
  }
  return builder(pageInfo)
}

const activity = (options) => {
    const parameters = getQueryParameters(options)
    const currentActivityDetail = activities.filter(item => item.id === parameters.id).shift()
    return builder(currentActivityDetail, '成功', 200);
  }
  
Mock.mock(/\/api\/activityDetail/, 'get', activity)

Mock.mock(/\/api\/activities/, 'get', listActivities)
