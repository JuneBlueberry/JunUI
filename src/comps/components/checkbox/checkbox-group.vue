<!-- JunChen 2018-10-11 复选框组CheckBoxGroup组件 -->
<template>
  <div
    :class="['jun-checkbox-group']">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../../utils/assist'

export default {
  name: 'jun-checkbox-group',
  props: {
    value: Array,
  },
  data () {
    return {
      currentModel: this.value
    };
  },

  computed: {},

  mounted: function(){
    this.updateValue()
  },

  methods: {
    updateValue: function(){
      const CheckBoxs = findComponentsDownward(this, 'jun-checkbox')
      CheckBoxs.forEach(checkbox => {
        checkbox.group = true
        checkbox.currentModel = this.value
        if(this.currentModel.length > 0){
          if(this.currentModel.indexOf(checkbox.label) >= 0){
            checkbox.currentValue = true
          }
        }
      })
    },
    change: function(data){
      if(data.checked){
        this.currentModel.push(data.label)
        this.$emit('input', this.currentModel)
      }
    }
  },

  watch: {
    currentModel: function(){
      this.updateValue()
    }
  }
}
</script>