<!-- By Abner 2018-11-29 侧边栏sidebar组件 -->
<template>
  <div class="jun-sidebar-div">
    <transition name="sidebar-mask">
      <div 
        v-show="visible" 
        class="sidebar-mask"
        @click="visible = false"></div>
    </transition>
    <transition name="sidebar-warpper">
      <div 
        v-show="visible" 
        class="sidebar-warpper"
        :style="sidebarStyle"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'jun-sidebar',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      width: {
        type: [Number,String],
        default: 20
      }
    },
    data () {
      return {
        visible: false,
        style: {}
      }
    },

    components: {},

    computed: {
      sidebarStyle: function(){
        let style = {}
        if(typeof this.width == 'number'){
          style.width = this.width + 'vw'
        }else if(typeof this.width == 'string' && this.width !== ''){
          style.width = this.width
        }
        return style
      }
    },

    methods: {

    },

    watch: {
      value: function(newValue){
        this.visible = newValue
      },
      visible: function(newValue){
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
</script>