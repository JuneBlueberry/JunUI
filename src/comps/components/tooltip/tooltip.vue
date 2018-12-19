<!-- JunChen 2018-12-14 文字提示 Tooltip -->
<template>
  <div class="jun-tooltip-div">
    <div v-if="isShow" class="tooltip-warpper">
      <div class="warpper-arrow"></div>
      <div class="warpper-msg"></div>
    </div>
    <div
      class="tooltip-content" 
      @mouseenter="mouseenter"
      @mouseleave="mouseleave">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jun-tooltip',
  props: {},
  data () {
    return {
      isShow: true
    };
  },

  components: {},

  computed: {},

  methods: {
    mouseenter: function(){
      this.isShow = true
    },
    mouseleave: function(){
      this.isShow = false
    },
  }
}
</script>