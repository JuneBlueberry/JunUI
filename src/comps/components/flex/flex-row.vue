<!-- JunChen 2018-09-25 栅格布局行 -->
<template>
  <div 
    class="jun-flex-row" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../utils/assist';

export default {
  name: "jun-flex-row",
  props: {
    getter: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },

  computed: {
    styles: function() {
      let style = {};
      if (this.gutter !== 0) {
        style = {
          marginLeft: this.gutter / -2 + "px",
          marginRight: this.gutter / -2 + "px"
        };
      }
      return style;
    }
  },

  methods: {
    updateGutter: function(val) {
      const Cols = findComponentsDownward(this, "junFlexCol");
      if (Cols.length) {
        Cols.forEach(child => {
          if (val !== 0) {
            child.gutter = val;
          }
        });
      }
    }
  },

  watch: {
    gutter: function(val) {
      this.updateGutter(val);
    }
  }
};
</script>