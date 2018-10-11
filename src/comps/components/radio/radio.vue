<!-- JunChen 2018-09-29 单选框 -->
<template>
  <div :class="['jun-radio-div']">
    <input 
      :class="[size!=''?'radio-size-'+size:'', color!=''?'radio-color-'+color:'', {'is-disabled': disabled}]" 
      type="radio"
      :disabled="disabled" 
      :name="name"
      :label="label"
      :checked="currentValue"
      @change="change">
    <slot class="radio-label"></slot>
  </div>
</template>

<script>
import { oneOf,findComponentUpward } from '../../../utils/assist';

export default {
  name: 'jun-radio',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      validator (value) {
        return oneOf(value, ['blue','green','red','yellow'])
      },
      default: 'blue'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      isChecked: this.checked,
      group: false,
      name: '',
      parent: findComponentUpward(this, 'jun-radio-group')
    };
  },

  components: {},

  computed: {

  },

  mounted: function(){
    this.updateValue(this.currentValue)
  },

  methods: {
    change: function(event){
      if(this.disabled == true){
        return false
      }
      
      let checked = event.target.checked
      this.currentValue = checked

      if(this.group){
        this.parent.change({
          label: this.label,
          value: checked
        })
      }else{
        this.$emit('input', checked)
        this.$emit('change', checked)
      }
    },
    updateValue: function(){
      //this.currentValue = this.value
    }
  },

  watch: {

  }
}
</script>