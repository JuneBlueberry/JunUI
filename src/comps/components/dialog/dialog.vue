<!-- JunChen 2018-11-30 对话框Dialog组件 -->
<template>
  <div class="jun-dialog-div">
    <div v-if="visible" class="dialog-mask"></div>
    <transition name="dialog-warpper">
      <div v-if="visible" class="dialog-warpper" @click="btnMaskClosable">
        <div class="dialog-content" @click.stop>
          <div class="dialog-header">
            <span>标题</span>
            <jun-icon 
              class="dialog-icon" type="icon-close" :size="20" color="#afafaf"
              @click.native="btnCancel"></jun-icon>
          </div>
          <div class="dialog-main"></div>
          <div class="dialog-footer">
            <jun-button class="btn-confirm" type="primary" @click="btnConfirm">确定</jun-button>
          </div>
        </div>
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
    },
    maskClosable: {
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

  methods: {
    btnMaskClosable: function(){
      if(!this.maskClosable){
        this.visible = true
      }
    },
    btnCancel: function(){
      this.$emit('on-cancel')
      this.visible = false
    },
    btnConfirm: function(){
      this.$emit('on-confirm')
    }
  },

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