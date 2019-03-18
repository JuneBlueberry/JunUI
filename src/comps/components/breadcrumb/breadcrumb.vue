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
  props: {},
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: function(){
    this.updateBreadcrumb();
  },

  methods: {
    updateBreadcrumb: function(val) {
      const breadcrumbs = findComponentsDownward(this, "jun-breadcrumb-item")
      if (breadcrumbs.length > 2) {
        breadcrumbs[breadcrumbs.length-1].disabled = false
      }
    }
  }
}
</script>