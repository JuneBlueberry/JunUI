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
          <jun-icon v-show="isSelectItem=='day'" @click.native="onLastMonth" type='icon-return' color='#c6c6c680' class="header-lefticon"></jun-icon>
          <div class="header-date">
            <span @click="onSelectYear" class="header-date-year">{{currentYear}}年</span>
            <span v-show="isSelectItem=='day'" @click="onSelectMonth" class="header-date-month">{{currentMonth}}月</span>
          </div>
          <jun-icon @click.native="onNextYear" type='icon-doubleright' color='#c6c6c680' class="header-doublerighticon"></jun-icon>
          <jun-icon v-show="isSelectItem=='day'" @click.native="onNextMonth" type='icon-enter' color='#c6c6c680' class="header-righticon"></jun-icon>
        </div>
        <div class="datepicker-mian">
          <div class="datepicker-days" v-show="isSelectItem=='day'">
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
                    @click="inputSelectDay(itemson.year, itemson.month, itemson.day)">
                    {{itemson.day}}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="datepicker-years" v-show="isSelectItem=='year'">
            <table>
              <tr v-for="(item, index) in yearArray" :key="index">
                <td 
                  v-for="(itemson, index) in item" 
                  :key="index"
                  @click="inputSelectYear(itemson.year)">
                  {{itemson.year}}
                </td>
              </tr>
            </table>
          </div>
          <div class="datepicker-months" v-show="isSelectItem=='month'">
            <table>
              <tr v-for="(item, index) in monthArray" :key="index">
                <td 
                  v-for="(itemson, index) in item" 
                  :key="index"
                  @click="inputSelectMonth(itemson.month)">
                  {{itemson.month}}
                </td>
              </tr>
            </table>
          </div>
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
import { oneOf } from '../../../utils/assist';
export default {
  name: 'jun-datepicker',
  props: {
    value: {
      type: [String, Array]
    },
    type: {
      type: String,
      validator (value) {
        return oneOf(value, ['date','daterange'])
      },
      default: 'date'
    }
  },
  data () {
    return {
      dateArray: [],       //天数数组
      monthArray: [],      //月份数组
      yearArray: [],       //年份数组

      selectValue: this.value,    //选择的值
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

      isDatepickerDivShow: false,
      isSelectItem: 'day'
    };
  },

  components: {},

  computed: {},

  mounted: function(){
    var date
    if(this.selectValue == '' || this.selectValue == undefined){
      date = new Date()
    } else {
      try {
        date = new Date(this.selectValue)
        if(date == 'Invalid Date'){
          console.log('输入时间的格式不正确，已经默认选为当前时间')
          date = new Date()
        }
      } catch (error) {
        console.log('请输入正式格式的时间')
        date = new Date()
      }
    }

    this.nowDate = this.currentDate = date.getDate()
    this.nowMonth = this.currentMonth = date.getMonth() + 1
    this.nowYear = this.currentYear = date.getFullYear()  
  },

  methods: {
    inputSelectDay: function(year, month, day){
      this.currentDate = day
      this.selectDate = day
      this.selectMonth = month
      this.selectYear = year
      this.selectValue = year + '-' + month + '-' + day
      this.isDatepickerDivShow = false
    },

    //选择月份
    inputSelectMonth: function(month){
      this.currentMonth = month
      this.setDates(this.currentYear, this.currentMonth)
      this.isSelectItem = 'day'
    },

    //选择年份
    inputSelectYear: function(year){
      this.currentYear = year
      this.setMonthList()
      this.isSelectItem = 'month'
      this.yearArray = []
    },

    //点击Input
    onClickDatepicker: function(){
      if(this.isDatepickerDivShow){
        this.isDatepickerDivShow = !this.isDatepickerDivShow
      }else{
        this.isDatepickerDivShow = !this.isDatepickerDivShow
        this.setDates(this.currentYear, this.currentMonth)
      }
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
      if(this.isSelectItem == 'day'){
        this.currentYear = this.currentYear - 1
        this.setDates(this.currentYear, this.currentMonth)
      }else if(this.isSelectItem == 'month'){
        this.currentYear = this.currentYear - 1
      }else if(this.isSelectItem == 'year'){
        this.currentYear = this.currentYear - 10
        this.yearArray = []
        this.setYearList()
      }

    },

    //下一年
    onNextYear: function(){
      if(this.isSelectItem == 'day'){
        this.currentYear = this.currentYear + 1
        this.setDates(this.currentYear, this.currentMonth)
      }else if(this.isSelectItem == 'month'){
        this.currentYear = this.currentYear + 1
      }else if(this.isSelectItem == 'year'){
        this.currentYear = this.currentYear + 10
        this.yearArray = []
        this.setYearList()
      }
      
    },

    //选择年份
    onSelectYear: function(){
      this.setYearList()
      this.isSelectItem = 'year'
    },

    //选择月份
    onSelectMonth: function(){
      this.setMonthList()
      this.isSelectItem = 'month'
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

    //获取表格天list
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

    //设置表格天list
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

    //设置表格月list
    setMonthList: function(){
      if(this.monthArray.length <= 0){
        this.monthArray = [
          [{month: 1},{month: 2},{month: 3}],
          [{month: 4},{month: 5},{month: 6}],
          [{month: 7},{month: 8},{month: 9}],
          [{month: 10},{month: 11},{month: 12}]
        ]
      }
    },

    //设置表格年list
    setYearList: function(){
      if(this.yearArray.length <= 0){
        let startYear = this.currentYear - (this.currentYear % 10)
        this.yearArray = [
          [{year: startYear+0},{year: startYear+1},{year: startYear+2}],
          [{year: startYear+3},{year: startYear+4},{year: startYear+5}],
          [{year: startYear+6},{year: startYear+7},{year: startYear+8}],
          [{year: startYear+9}]
        ]
      }
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