<!-- JunChen 2018-11-30 对话框Dialog组件 -->
<template>
  <div class="jun-dialog-div">
    <div v-if="visible" class="dialog-mask"></div>
    <transition name="dialog-warpper">
      <div v-if="visible" class="dialog-warpper" @click="visible=false">
        <div class="dialog-main"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'jun-dialog',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: false
    };
  },

  components: {},

  computed: {},

  methods: {},

  watch: {
    value: {
      deep: true,
      handler: function(newValue){
        this.visible = newValue
      },
    },
    visible: {
      deep: true,
      handler: function(newValue){
        this.$emit('input', newValue)
        this.$emit('change', newValue)
        if(newValue){
          this.$emit('on-show', newValue)
        }else{
          this.$emit('on-close', newValue)
        }
      }
    }
  }
}
</script>