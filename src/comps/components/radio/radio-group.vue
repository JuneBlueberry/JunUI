<!-- JunChen 2018-09-29 单选组 -->
<template>
  <div 
    :class="['jun-radio-group']">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../../utils/assist'

export default {
  name: 'jun-radio-group',
  props: {
    value: {
      type: [String, Number],
      default: ''
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
    this.updateValue()
  },

  methods: {
    updateValue: function(){
      let value = this.currentValue
      const Radios = findComponentsDownward(this, 'jun-radio')
      if(Radios.length > 0){
        Radios.forEach(radio => {
          radio.currentValue = value == radio.label
          radio.group = true
          radio.name = "radio"
        })
      }
    },

    change: function(data){
      this.currentValue = data.label
      this.updateValue()
      this.$emit('input', data.label)
      this.$emit('change', data.label)
    }
  },

  watch: {
    value: {
      handler: 'updateValue',
    }
  }
}
</script>