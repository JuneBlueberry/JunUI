<!-- JunChen 2018-11-01 便签tabs-item组件 -->
<template>
  <div v-show="name==currentName">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentUpward } from '../../../utils/assist'
export default {
  name: 'jun-tabs-item',
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    }
  },
  data () {
    return {
      currentName: ''
    };
  },

  components: {},

  computed: {},

  mounted: function(){
    const Tabs = findComponentUpward(this, 'jun-tabs')
    if(Tabs != undefined){
      Tabs.updateTabName()
    }
  },

  methods: {}
}
</script>