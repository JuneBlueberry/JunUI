<!-- JunChen 2018-10-25 日期组件Datepicker -->
<template>
  <div class="jun-datepicker-div">
    <input 
      :class="['datepicker-input']"
      readonly="readonly"
      @click="isDatepickerDivShow=!isDatepickerDivShow"/>
    
    <transition name="datepickerDiv">
      <div 
        class="datepicker-warpper"
        v-if="isDatepickerDivShow">
        <div class="datepicker-header"></div>
        <div class="datepicker-mian">
          <ul>
            
          </ul>
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
      isDatepickerDivShow: false
    };
  },

  components: {},

  computed: {},

  methods: {}
}
</script>