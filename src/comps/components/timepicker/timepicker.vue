<!-- JunChen 2019-03-19 timepicker时间控件 -->
<template>
  <div class="jun-timepicker-div">
    <input 
      :class="['timepicker-input']" 
      v-model="setTime" 
      @click="handleShow"
      readonly/>
    
    <transition name="timepickerDiv">
      <div 
        class="timepicker-warpper"
        v-if="isTimepickerDivShow">
        <div class="times-item">
          <span :class="['time-item', {'is-select': (i-1)==currentHour}]" v-for="i in 24" @click="handleHour(i-1)">
            {{i<10 ? '0'+(i-1) : (i-1)}}
          </span>
        </div>
        <div class="times-item">
          <span :class="['time-item', {'is-select': (i-1)==currentMinute}]" v-for="i in 60" @click="handleMinute(i-1)">
            {{i<10 ? '0'+(i-1) : (i-1)}}
          </span>
        </div>
        <div class="times-item">
          <span :class="['time-item', {'is-select': (i-1)==currentSecond}]" v-for="i in 60" @click="handleSecond(i-1)">
            {{i<10 ? '0'+(i-1) : (i-1)}}
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'jun-timepicker',
  props: {},
  data () {
    return {
      currentTime: '',
      currentHour: 0,
      currentMinute: 0,
      currentSecond: 0,

      isTimepickerDivShow: false
    };
  },

  components: {},

  computed: {
    setTime: function(){
      return this.currentHour + ":" + this.currentMinute + ":" + this.currentSecond
    }
  },

  methods: {
    handleShow: function(){
      this.isTimepickerDivShow = !this.isTimepickerDivShow
    },
    handleHour: function(val){
      this.currentHour = val < 10 ? ('0' + val) : val
    },
    handleMinute: function(val){
      this.currentMinute = val < 10 ? ('0' + val) : val
    },
    handleSecond: function(val){
      this.currentSecond = val < 10 ? ('0' + val) : val
    }
  }
}
</script>