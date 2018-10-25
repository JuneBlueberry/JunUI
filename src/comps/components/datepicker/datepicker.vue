<!-- JunChen 2018-10-25 日期组件Datepicker -->
<template>
  <div class="jun-datepicker-div">
    <input 
      :class="['datepicker-input']"
      readonly="readonly"
      v-model="selectDate"
      @click="isDatepickerDivShow=true"/>
    
    <transition name="datepickerDiv">
      <div 
        class="datepicker-warpper"
        v-if="isDatepickerDivShow">
        <div class="datepicker-header">
          <jun-button @click="onLastMonth">上个月</jun-button>
          <jun-button @click="onNextMonth">下个月</jun-button>
        </div>
        <div class="datepicker-mian">
          <table>
            <thead>
              <tr>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
                <th>天</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in dateArray" :key="index">
                <td 
                  v-for="(itemson, index) in item" 
                  :key="index" 
                  :class="itemson.exceed?'date-exceed':''"
                  @click="selectDay(itemson.year, itemson.month, itemson.day)">
                  {{itemson.day}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="datepicker-footer"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'jun-datepicker',
  props: {},
  data () {
    return {
      selectDate: '',

      dateArray: [],       //天数数组

      nowDate: 0,         //今天

      currentMonth: 0,    //本月
      currentYear: 0,     //本年
      currentAllDay: 0,   //本月一共多少天
      currentStartDay: 0,   //本月月初星期几
      currentEndDay: 0,     //本月月末星期几

      lastYear: 0,         //上年
      lastMonth: 0,       //上个月
      lastExceedDay: 0,     //上月还需补充几天
      lastAllDay: 0,      //上个月一共有多少天

      nextYear: 0,        //下年
      nextMonth: 0,       //下个月

      isDatepickerDivShow: false
    };
  },

  components: {},

  computed: {},

  mounted: function(){
      var date = new Date()
      this.nowDate = date.getDate()

      this.currentMonth = date.getMonth() + 1
      this.currentYear = date.getFullYear()

      this.setDates(this.currentYear, this.currentMonth)
  },

  methods: {
    selectDay: function(year, month, day){
      this.selectDate = year + '-' + month + '-' + day
    },

    //设置时间
    setDates: function(year, month){
      var date=new Date()

      this.currentAllDay = this.getDaysInOneMonth(year, month)
      console.log(this.currentAllDay)

      this.lastMonth = month-1
      this.lastYear = year

      this.nextMonth = month+1
      this.nextYear = year

      var nowDay = new Date(year, month-1, 1).getDay()
      if(nowDay == 0){
        this.currentStartDay = 7
      }else{
        this.currentStartDay = nowDay
      }
      this.lastExceedDay = this.currentStartDay - 1
      this.lastAllDay = this.getDaysInOneMonth(this.lastYear, this.lastMonth)
      this.getDateList()
    },

    onLastMonth: function(){
      if(this.currentMonth-1 > 0){
        this.currentMonth = this.currentMonth - 1
      }else{
        this.currentMonth = 12
        this.currentYear = this.currentYear - 1
      }
      this.setDates(this.currentYear, this.currentMonth)
    },

    onNextMonth: function(){
      if(this.currentMonth+1 < 13){
        this.currentMonth = this.currentMonth + 1
      }else{
        this.currentMonth = 1
        this.currentYear = this.currentYear + 1
      }
      this.setDates(this.currentYear, this.currentMonth)
    },

    //获取表格日期list
    getDateList: function(){
      var dateArr = []
      for(let i=this.lastAllDay-this.lastExceedDay; i<this.lastAllDay; i++){
        dateArr.push({
          year: this.lastYear,
          month: this.lastMonth,
          day: i,
          exceed: true
        })
      }
      for(let i=1; i<=this.currentAllDay; i++){
        dateArr.push({          
          year: this.currentYear,
          month: this.currentMonth,
          day: i,
          exceed: false
        })
      }
      for(let i=1; i<=42-this.currentAllDay-this.lastExceedDay; i++){
        dateArr.push({
          year: this.nextYear,
          month: this.nextMonth,
          day: i,
          exceed: true
        })
      }
      console.log(dateArr)
      this.setDateList(dateArr)
    },

    //设置表格日期list
    setDateList: function(dateArr){
      if(dateArr.length != 42){
        console.log('日历天数错误!')
      }
      this.dateArray = []
      var weekArr = []

      dateArr.forEach((item, index) => {
        if(index%7 != 6){
          weekArr.push(item)
        }else{
          weekArr.push(item)
          this.dateArray.push(weekArr)
          weekArr=[]
        }
      });
    },

    //获取当月的天数
    getDaysInOneMonth: function (year, month){
      month = parseInt(month, 10);
      var d= new Date(year, month, 0);
      return d.getDate();
    }
  }
}
</script>