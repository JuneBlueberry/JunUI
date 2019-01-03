<!-- By Abner 2018-11-29 侧边栏sidebar组件 -->
<template>
  <div class="jun-sidebar-div">
    <transition name="sidebar-mask">
      <div 
        v-show="visible" 
        class="sidebar-mask"
        @click="visible = false"></div>
    </transition>
    <transition :name="direction + '-sidebar-warpper'">
      <div 
        v-show="visible" 
        :class="['sidebar-warpper', 'sidebar-direction-'+direction]"
        :style="sidebarStyle">
          <slot></slot>
        </div>
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
      length: {
        type: [Number,String],
        default: 20
      },
      direction: {
        type: String,
        default: 'right'
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
        
          if(this.direction == 'right' || this.direction == 'left'){
            style.height = '100vh'
            if(typeof this.length == 'number'){
              style.width = this.length + 'vw'
            }else if(typeof this.length == 'string' && this.length !== ''){
              style.width = this.length
            }
          }else{
            style.width = '100vw'
            if(typeof this.length == 'number'){
              style.height = this.length + 'vh'
            }else if(typeof this.length == 'string' && this.length !== ''){
              style.height = this.length
            }
          }
        
        return style
      }
    },

    methods: {
      getTarget: function(node) {
          if (node === void 0) {
              node = document.body
          }
          if (node === true) { return document.body }
          return node instanceof window.Node ? node : document.querySelector(node)
      }
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