<!-- JunChen 2018-09-25 栅格布局列 -->
<template>
  <div
    class="jun-flex-col"
    :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentUpward } from '../../../utils/assist';

export default {
  name: "jun-flex-col",
  props: {
    span: {
      type: Number,
      default: 24
    }
  },
  data() {
    return {
      gutter: 0
    };
  },

  computed: {
    styles: function() {
      let style = {};
      if(this.span > 0 && this.span <= 24){
        style.width = (100*this.span/24)+'%'
      }else{
        style.width = '100%'
      }
      if (this.gutter !== 0) {
        style.paddingLeft = this.gutter / 2 + "px"
        style.paddingRight = this.gutter / 2 + "px"
      }
      return style;
    }
  },

  methods: {
    updateGutter() {
      const Row = findComponentUpward(this, "jun-flex-row")
      if (Row) {
        Row.updateGutter(Row.gutter);
      }
    }
  },

  mounted() {
    this.updateGutter();
  },
  beforeDestroy() {
    this.updateGutter();
  }
};
</script>