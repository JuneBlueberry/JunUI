<!-- JunChen 2019-03-19 timepicker时间控件 -->
<template>
  <div class="jun-timepicker-div">
    <input 
      :class="['timepicker-input']"/>
    
    <transition name="timepickerDiv">
      <div 
        class="timepicker-warpper"
        v-if="isTimepickerDivShow">
        <div class="time-item">
          <span class="hour-item" v-for="i in 23">
            {{i}}
          </span>
        </div>
        <div class="time-item">
          <span class="hour-item" v-for="i in 59">
            {{i}}
          </span>
        </div>
        <div class="time-item">
          <span class="hour-item" v-for="i in 59">
            {{i}}
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
      isTimepickerDivShow: true
    };
  },

  components: {},

  computed: {},

  methods: {}
}
</script>