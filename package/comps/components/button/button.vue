<template>
  <button :class="['jun-btn', 'jun-btn-type-'+type, 'jun-btn-size-'+size,
  {'is-disabled': disabled,'is-plain': plain, 'is-round': round}]" 
  :disabled="disabled"
  @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'jun-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * 按钮点击事件
     */
    handleClick: function(event){
      if(this.disabled){
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>
