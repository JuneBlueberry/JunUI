<!-- JunChen 2018-10-11 复选框CheckBox组件 -->
<template>
  <div class="jun-checkbox-div">
    <input
      v-if="group"
      :class="[size!=''?'radio-size-'+size:'', color!=''?'radio-color-'+color:'', {'is-disabled': disabled}]"
      type="checkbox"
      :checked="currentValue"
      @change="change">
    <input
      v-else
      :class="[size!=''?'radio-size-'+size:'', color!=''?'radio-color-'+color:'', {'is-disabled': disabled}]"
      type="checkbox"
      :checked="currentValue"
      @change="change">
      <slot class="checkbox-label">
        <span v-if="isShowSlot">{{label}}</span>
      </slot>
  </div>
</template>

<script>
import { oneOf, findComponentUpward } from '../../../utils/assist';

export default {
  name: 'jun-checkbox',
  props: {
    value: [String, Number, Boolean],
    param: [String, Number, Boolean, Array, Object],
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
    label: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentModel: [],
      currentValue: this.value,
      parent: findComponentUpward(this, 'jun-checkbox-group'),
      group: false,
      isShowSlot: false
    };
  },

  components: {},

  computed: {},

  mounted: function(){
    this.isShowSlot = this.$slots.default == undefined
  },

  methods: {
    change: function(event){
      if(this.disabled){
        return
      }

      let checked = event.target.checked
      if(this.group){
        this.parent.change({
          checked: checked,
          label: this.label
        })
      }else{
        this.$emit('change', checked, this.param)
        this.$emit('input', checked)
      }
    },
  },

  watch: {
    value: {
      handler: function(value){
        this.currentValue = value
      }
    }
  }
}
</script>