<!-- JunChen 2018-11-30 对话框Dialog组件 -->
<template>
  <div class="jun-dialog-div">
    <transition name="dialog-mask">
      <div v-if="visible" class="dialog-mask"></div>
    </transition>
    <transition name="dialog-warpper">
      <div v-if="visible" class="dialog-warpper" @click="btnMaskClosable">
        <div class="dialog-content" @click.stop>
          <div class="dialog-header">
            <span>{{title}}</span>
            <jun-icon 
              class="dialog-icon" type="icon-close" :size="20" color="#afafaf"
              @click.native="btnCancel"></jun-icon>
          </div>
          <div class="dialog-main">
            <slot name="main">
              <div class="main-default">
                <div class="main-left" v-if="type!=undefined">
                  <jun-icon v-if="type=='info'" type="icon-emoji_fill" :size="24" color="#0099cc"></jun-icon>
                  <jun-icon v-else-if="type=='success'" type="icon-success_fill" :size="24" color="#4db118"></jun-icon>
                  <jun-icon v-else-if="type=='warning'" type="icon-prompt_fill" :size="24" color="#e79302"></jun-icon>
                  <jun-icon v-else-if="type=='error'" type="icon-delete_fill" :size="24" color="#f25721"></jun-icon>
                </div>
                <div class="main-right">
                  <span>{{message}}</span>
                </div>
              </div>
            </slot>
          </div>
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
    },
    title: {
      type: String,
      default: '标题'
    },
    message: {
      type: String,
      default: '这是一个文案'
    },
    type: {
      type: String
    }
  },
  data () {
    return {
      visible: false,

      isPlug: false
    };
  },

  components: {},

  computed: {},

  methods: {
    btnMaskClosable: function(){
      if(this.maskClosable){
        this.visible = false
      }
    },
    btnCancel: function(){
      var that = this
      this.$emit('on-cancel')
      this.visible = false
      if(this.isPlug){
        setTimeout(function(){
          that.$el.parentNode.removeChild(that.$el)
        }, 1000)
      }
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