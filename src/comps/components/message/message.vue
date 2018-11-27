<!-- By Abner 2018-11-27 message组件 -->
<template>
  <div class="jun-message-div" :style="{top: top}">
    <div class="message-warpper">
      <div class="message-title" @click="haha">这是一条消息</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jun-message',
    props: {},
    data () {
      return {
        top: '0px'
      }
    },

    components: {},

    computed: {},

    methods: {
      haha: function(){
        this.top = '30px'
      }
    }
  }
</script>