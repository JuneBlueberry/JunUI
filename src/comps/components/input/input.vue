<!-- JunChen 2018-09-27 Input输入框 -->
<template>
  <div class="jun-input-div">
    <i 
      :class="['i-clearable', 'i-size-'+size, {'is-clearable': clearable}]"
      @click="clearValue"></i>
    <input 
      :class="['jun-input','jun-input-size-'+size, {'is-disabled': disabled, 'is-clearable': clearable}]"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="currentValue"
      @focus="onFocus"
      @blur="onBlur" />
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
    value: [String, Number]
  },
  data () {
    return {
      currentValue: this.value
    };
  },

  components: {},

  computed: {
    istyles: function() {
      if (this.size !== '') {
        style.paddingLeft = this.gutter / 2 + "px"
      }
      return style;
    }
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
    }
  },

  watch: {
    value: function(val){
      this.currentValue = val
    },
    currentValue: function(val){
      this.$emit('change', val)
    }
  }
}
</script>