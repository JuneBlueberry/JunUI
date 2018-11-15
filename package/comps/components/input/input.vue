<!-- JunChen 2018-09-27 Input输入框 -->
<template>
  <div :class="['jun-input-div', {'is-disabled': disabled}]">
    <div 
      :class="['jun-input-prepend', 'size-'+size, {'is-prepend': isPrepend}]"
      @click="onPrepend">
        <slot name="prepend"></slot>
      </div>
    <input 
      :class="['jun-input','size-'+size, {'is-clearable': clearable}]"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="currentValue"
      @focus="onFocus"
      @blur="onBlur" />
      <i 
        :class="['i-clearable', 'size-'+size , {'is-clearable': clearable}]"
        :style="iClearStyles"
        @click="clearValue"></i>
    <div 
      :class="['jun-input-append', 'size-'+size, {'is-append': isAppend}]"
      @click="onAppend">
        <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jun-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    prepend: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    value: [String, Number]
  },
  data () {
    return {
      currentValue: this.value,
      isPrepend: this.prepend,
      isAppend: this.append,
    };
  },

  components: {},

  computed: {
    iClearStyles: function() {
      let style = {};
      if(this.isAppend){
        style.right = '30px'
      }else if(this.type == 'number'){
        style.right = '20px'
      }
      return style;
    },
  },

  methods: {
    onBlur: function(event){
      this.$emit('blur', event.target.value)
    },
    onFocus: function(){
      this.$emit('focus')
    },
    clearValue: function(){
      this.currentValue = '';
    },
    onPrepend: function(){
      this.$emit('on-prepend', this.currentValue==undefined?'':this.currentValue)
    },
    onAppend: function(){
      this.$emit('on-append', this.currentValue==undefined?'':this.currentValue)
    }
  },

  watch: {
    value: function(val){
      this.currentValue = val
    },
    currentValue: {
      handler: function(val){
        this.$emit('input', val)
        this.$emit('change', val)
      }
    }
  }
}
</script>