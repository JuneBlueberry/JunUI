<!-- By Abner 2018-11-27 message组件 -->
<template>
  <transition name="jun-message">
    <div v-show="visible" class="jun-message-div">
        <div class="message-warpper">
          <div 
            :class="['message-main', 'message-type-' + type]">
            <span class="message-content">{{message}}</span>
            <jun-icon 
              v-if="clearable"
              class="message-icon"  type="icon-close" :size="20" color="#afafaf"
              @click.native="closeMessage"></jun-icon>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'jun-message',
    props: {},
    data () {
      return {
        visible: false,
        message: '这是一条消息',
        duration: 3000,
        type: '',
        clearable: false,
        onClose: null,
        onShow: null,

        closed: false
      }
    },

    components: {},

    computed: {},

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
      closeMessage: function(){
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