<!-- JunChen 2019-03-08 Breadcrumb 面包屑组件 -->
<template>
  <div class="jun-breadcrumb-div">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../../utils/assist';

export default {
  name: 'jun-breadcrumb',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      currentValue: this.value
    };
  },

  components: {},

  computed: {},

  mounted: function(){
    this.updateBreadcrumb();
  },

  methods: {
    updateBreadcrumb: function() {
      const breadcrumbs = findComponentsDownward(this, "jun-breadcrumb-item")
      if (breadcrumbs.length > 2) {
        breadcrumbs[breadcrumbs.length-1].disabled = false
      }
      breadcrumbs.forEach(breadcrumb => {
        if(breadcrumb.label === this.currentValue){
          breadcrumb.isActive = true
        }else{
          breadcrumb.isActive = false
        }
      });
    },

    updateVal: function(val){
      this.currentValue = val
      this.updateBreadcrumb()
      this.$emit('input', this.currentValue)
    }
  }
}
</script>