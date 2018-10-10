<!-- JunChen 2018-09-29 单选组 -->
<template>
  <div 
    :class="['jun-radio-group']">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../../utils/assist';

export default {
  name: 'jun-radio-group',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  model: {
      prop: 'value',
      event: 'radioVal'
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: function(){
    this.updateValue()
  },

  methods: {
    updateValue: function(){
      let value = this.value
      const Radios = findComponentsDownward(this, 'jun-radio')
      if(Radios.length > 0){
        Radios.forEach(radio => {
          console.log(radio.label)
          radio.currentValue = value == radio.label
        })
      }
    }
  },

  watch: {
    value: function(){
      this.updateValue()
    }
  }
}
</script>