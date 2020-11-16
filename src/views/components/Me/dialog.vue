<template>
    <!-- <div class="calendarShow" v-if="show"> -->
          <!-- <img src="../../../assets/jilubg.png" /> -->
          <van-calendar v-model="show" type="multiple" :formatter="formatter" :default-date='data' @confirm="onConfirm" />
        <!-- </div> -->
</template>



<script>
export default {
    data(){
        return{
            show:true,
            data:[]

        }
    },
    created(){
        console.log(this.show)
        this.data.push('2020-11-16')
    },
    methods:{
        onConfirm(date) {
          this.show = false;
          // this.time = `选择了 ${date.length} 个日期`;
          console.log(this.time)
        },
         formatter(day) {
           let year = day.date.getFullYear();
           let month = day.date.getMonth();
           let date = day.date.getDate();
          //  let getNowDate = new Date();
          //  let Year = getNowDate.getFullYear()
          //  let Month = getNowDate.getMonth()
          //  let Day = getNowDate.getDay()

          if (month === 5) {
            if (date === 1) {
              day.topInfo = '劳动节';
            } else if (date === 4) {
              day.topInfo = '青年节';
            } else if (date === 11) {
              day.text = '今天';
            }
          }
          // if(year == Year && month == Month && date == Day){
          //     day.type = 'selected'
          // }
          if (day.type === 'start') {
            day.bottomInfo = '入住';
          } else if (day.type === 'end') {
            day.bottomInfo = '离店';
          }

          return day;
        },
    }
}
</script>

<style scoped>
    .calendarShow{
    position: fixed;
    top: 45%;
    left: 50%;
    overflow: inherit;
    height: 350px;
    width: 250px;
    font-size: 16px;
    background-color: #fff;
    border-radius: 16px;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: .3s;
    transition: .3s;
    -webkit-transition-property: opacity,-webkit-transform;
    transition-property: opacity,-webkit-transform;
    transition-property: transform,opacity;
    transition-property: transform,opacity,-webkit-transform;
    z-index: 2000;
  }
  .calendarShow .van-overlay{
    background-color: initial;
  }
 

  
</style>