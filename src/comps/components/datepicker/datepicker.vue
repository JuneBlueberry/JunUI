<!-- JunChen 2018-10-25 日期组件Datepicker -->
<template>
  <div class="jun-datepicker-div">
    <input 
      :class="['datepicker-input']"
      readonly="readonly"
      v-model="selectValue"
      @click="onClickDatepicker"/>
    
    <transition name="datepickerDiv">
      <div 
        class="datepicker-warpper"
        v-if="isDatepickerDivShow">
        <div class="datepicker-header">
          <jun-icon @click.native="onLastYear" type='icon-doubleleft' color='#c6c6c680' class="header-doublelefticon"></jun-icon>
          <jun-icon @click.native="onLastMonth" type='icon-return' color='#c6c6c680' class="header-lefticon"></jun-icon>
          <div class="header-date">{{currentYear}}/{{currentMonth}}</div>
          <jun-icon @click.native="onNextYear" type='icon-doubleright' color='#c6c6c680' class="header-doublerighticon"></jun-icon>
          <jun-icon @click.native="onNextMonth" type='icon-enter' color='#c6c6c680' class="header-righticon"></jun-icon>
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
                  :class="itemson.exceed==true?'date-exceed':itemson.exceed=='date-today'?'date-today':itemson.exceed=='date-selectday'?'date-selectday':''"
                  @click="selectDay(itemson.year, itemson.month, itemson.day)">
                  {{itemson.day}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="datepicker-footer">
          <span @click="onClearDate" class="footer-lefticon">清空</span>
          <span @click="oncancelDate" class="footer-righticon">取消</span>
        </div>
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
      dateArray: [],       //天数数组

      selectValue: '',    //选择的值
      selectDate: 0,     //选择的天
      selectYear: 0,     //选择的年
      selectMonth: 0,     //选择的月

      nowDate: 0,         //今天
      nowYear: 0,         //今天的年
      nowMonth: 0,        //今天的月

      currentDate: 0,     //今天
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

      this.nowDate = this.currentDate = date.getDate()
      this.nowMonth = this.currentMonth = date.getMonth() + 1
      this.nowYear = this.currentYear = date.getFullYear()

      
  },

  methods: {
    selectDay: function(year, month, day){
      this.currentDate = day
      this.selectDate = day
      this.selectMonth = month
      this.selectYear = year
      this.selectValue = year + '-' + month + '-' + day
      this.isDatepickerDivShow = false
    },

    //
    onClickDatepicker: function(){
      if(this.isDatepickerDivShow){
        this.isDatepickerDivShow = !this.isDatepickerDivShow
      }else{
        this.isDatepickerDivShow = !this.isDatepickerDivShow
        this.setDates(this.currentYear, this.currentMonth)
      }
    },
    //设置时间
    setDates: function(year, month){
      var date=new Date()

      this.currentAllDay = this.getDaysInOneMonth(year, month)

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

    //上一个月
    onLastMonth: function(){
      if(this.currentMonth-1 > 0){
        this.currentMonth = this.currentMonth - 1
      }else{
        this.currentMonth = 12
        this.currentYear = this.currentYear - 1
      }
      this.setDates(this.currentYear, this.currentMonth)
    },

    //下一个月
    onNextMonth: function(){
      if(this.currentMonth+1 < 13){
        this.currentMonth = this.currentMonth + 1
      }else{
        this.currentMonth = 1
        this.currentYear = this.currentYear + 1
      }
      this.setDates(this.currentYear, this.currentMonth)
    },

    //上一年
    onLastYear: function(){
      this.currentYear = this.currentYear - 1
      this.setDates(this.currentYear, this.currentMonth)
    },

    //下一年
    onNextYear: function(){
      this.currentYear = this.currentYear + 1
      this.setDates(this.currentYear, this.currentMonth)
    },

    //取消
    oncancelDate: function(){
      this.isDatepickerDivShow = false
    },

    //清空选择数据
    onClearDate: function(){
      this.selectDate = 0
      this.selectMonth = 0
      this.selectYear = 0
      this.selectValue = ''
      this.getDateList()
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
      console.log(this.currentDate)
      for(let i=1; i<=this.currentAllDay; i++){
        let dayClass = false
        if (this.selectYear == this.currentYear && this.selectMonth == this.currentMonth && this.selectDate == i){
          dayClass = 'date-selectday'
        }
        else if(this.nowYear == this.currentYear && this.nowMonth == this.currentMonth && this.nowDate == i)
        {
          dayClass = 'date-today'
        }

        dateArr.push({          
          year: this.currentYear,
          month: this.currentMonth,
          day: i,
          exceed: dayClass
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