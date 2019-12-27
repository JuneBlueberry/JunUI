<!-- JunChen 2019-08-05 -->
<template>
  <div class="jun-steps-div">
    <div class="steps-warpper">
      <slot></slot>
      <div class="steps-line"></div>
    </div>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../../utils/assist'

export default {
  name: 'jun-steps',
  props: {},
  data () {
    return {
    };
  },

  mounted: function(){
    this.updateGutter()
  },

  methods: {
    updateGutter: function() {
      const Steps = findComponentsDownward(this, "jun-step")
      if (Steps.length) {
        Steps.forEach((child, index) => {
          child.index = index + 1
        })
      }
    }
  }
}
</script>