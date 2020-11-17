<template>
  <van-calendar
    type="multiple"
    v-model="show"
    :formatter="formatter"
    :poppable="true"
    :title="title"
    :color="color"
    :show-confirm="false"
    :min-date="minDate"
    :style="{
      height: '500px',
      width: '80%',
      margin: '10%',
      borderRadius: '20px'
    }"
    @close="
      () => {
        this.$emit('close')
      }
    "
  />
</template>

<script>
export default {
  name: "Dialog",
  props: {
    show: {
      type: Boolean
    }
  },
  data() {
    return {
      color: "rgb(255, 186, 0)",
      minDate: new Date(2010, 0, 1),
      title: "打卡记录"
    };
  },

  created() {},
  methods: {
    formatter(day) {
      let year = day.date.getFullYear();
      let month = day.date.getMonth() + 1;
      let day1 = day.date.getDate();
      let dateList = [
        {
          year: "2020",
          month: "09",
          day: "06"
        },
        {
          year: "2020",
          month: "10",
          day: "15"
        },
        {
          year: "2020",
          month: "11",
          day: "13"
        }
      ];

      dateList.filter(item => {
        if (item.year == year && item.month == month && item.day == day1) {
          day.type = "selected";
        }
      });

      return day;
    }
  }
};
</script>

<style scoped>
.calendarShow {
  position: fixed;
  top: 45%;
  left: 50%;
  overflow: inherit;
  height: 350px;
  width: 250px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 16px;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  z-index: 2000;
}
.calendarShow .van-overlay {
  background-color: initial;
}
</style>
