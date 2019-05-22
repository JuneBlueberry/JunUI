<!-- JunChen 2019-05-14 Notice组件-提醒 -->
<template>
  <transition name="jun-notice">
    <div v-show="visible" class="jun-notice-div">
      <div class="notice-warpper">
        <jun-icon @click="closeNotice" class="notice-close-icon" type="icon-close" :size="17"></jun-icon>
        <div class="notice-type" v-if="type!='primary'">
          <jun-icon v-if="type=='info'" class="notice-type-icon" type="icon-prompt" color="#0099cc"></jun-icon>
          <jun-icon v-else-if="type=='success'" class="notice-type-icon" type="icon-success" color="#4db118"></jun-icon>
          <jun-icon v-else-if="type=='warning'" class="notice-type-icon" type="icon-offline" color="#e79302"></jun-icon>
          <jun-icon v-else-if="type=='danger'" class="notice-type-icon" type="icon-delete" color="#f25721"></jun-icon>
        </div>
        <div>
          <slot name="title">
            <div class="notice-title">
              <h5>{{ title }}</h5>
            </div>
          </slot>
          <slot name="msg">
            <div class="notice-msg">
              {{ message }}
            </div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'jun-notice',
  props: {},
  data () {
    return {
      visible: false,
      type: 'primary',
      clearable: false,
      title: '这是一个提醒标题',
      message: '这是一个提醒正文这是一个提醒正文这是一个提醒正文这是一个提醒正文这是一个提醒正文这是一个提醒正文',
      duration: 3000,
      onClose: null,
      onShow: null,
      

      closed: false,
    };
  },

  mounted: function(){
    this.close()
  },

  methods: {
    close: function(){
      if(this.duration > 0){
        setTimeout(()=>{
          if(!this.closed){
            this.closed = true
          }
        }, this.duration)
      }
    },

    closeNotice: function(){
      this.closed = true
    },

    destroyElement: function(){
      this.$el.removeEventListener('transitionend', this.destroyElement)
      if(this.onClose != null){
        this.onClose()
      }
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  },

  watch: {
    closed: function(newValue){
      if(newValue){
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  }
}
</script>