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
import { oneOf } from '../../../utils/assist';

export default {
  name: 'jun-radio',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    name: {
      type: String,
      default: 'radio'
    },
    label: {
      type: String,
      default: ''
    },
    size: String,
    color: {
      type: String,
      validator (value) {
        return oneOf(value, ['blue','green','red','yellow']);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      isChecked: this.checked
    };
  },

  components: {},

  computed: {

  },

  mounted: function(){
    console.log(this.currentValue)
    this.updateValue(this.currentValue)
  },

  methods: {
    change: function(event){
      if(this.disabled == true){
        return false
      }
      let checked = event.target.checked
      console.log(checked)
      this.$emit('change', checked)
    },
    updateValue: function(){
      this.currentValue = this.value
    }
  },

  watch: {
    currentValue: function(val){
      console.log(val)
      this.updateValue(val)
    }
  }
}
</script>