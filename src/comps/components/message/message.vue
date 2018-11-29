<!-- By Abner 2018-11-27 message组件 -->
<template>
  <transition name="jun-message">
    <div v-show="visible" class="jun-message-div">
        <div class="message-warpper">
          <div class="message-title">这是一条消息</div>
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
        duration: 3000,

        closed: false
      }
    },

    components: {},

    computed: {},

    mounted: function(){
      console.log(111)
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

      destroyElement: function(){
        this.$el.removeEventListener('transitionend', this.destroyElement)
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