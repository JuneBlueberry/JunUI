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
        visible: false
      }
    },

    components: {},

    computed: {},

    mounted: function(){
      this.visible = true
      this.close()
    },

    methods: {
      close: function(){
        setTimeout(()=>{
          this.visible = false;
        },2000)
      }
    }
  }
</script>