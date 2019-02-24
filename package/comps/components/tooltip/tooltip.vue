<!-- JunChen 2018-12-14 文字提示 Tooltip -->
<template>
  <div class="jun-tooltip-div">
    <div v-if="isShow" class="tooltip-warpper">
      <div 
        class="warpper-arrow"
        :style="arrowStyle"
        ref='ref_arrow'></div>
      <div 
        class="warpper-msg"
        :style="msgStyle">
        {{msg}}
      </div>
    </div>
    <div
      class="tooltip-content" 
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      ref='ref_warpper'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jun-tooltip',
  props: {
    msg: {
      type: String
    },
    placement: {
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      warpperWidth: 0,
      warpperHeight: 0,
      msgWidth: 0,
      msgHeight: 0,
      isShow: false
    };
  },

  mounted: function(){
    this.warpperWidth = this.$refs.ref_warpper.offsetWidth
    this.warpperHeight = this.$refs.ref_warpper.offsetHeight
  },

  updated: function(){
    
  },

  components: {},

  computed: {
    arrowStyle: function(){
      let style = {}
        if(this.placement == 'top'){
          style = {
            top: -10 + 'px',
            left: (this.warpperWidth/2) + 'px',
          }
        }
        else if(this.placement == 'right'){
          style = {
            borderWidth: '6px 6px 6px 0px',
            top: ((this.warpperHeight/2)-6) + 'px',
            left: (this.warpperWidth + 6) + 'px',
            borderColor: 'transparent #000 transparent transparent'
          }
        }
        else if(this.placement == 'bottom'){
          style = {
            borderWidth: '0px 6px 6px 6px',
            top: (this.warpperHeight + 4) + 'px',
            left: (this.warpperWidth/2) + 'px',
            borderColor: 'transparent transparent #000 transparent'
          }
        }
        // else if(this.placement == 'left'){
        //   style = {
        //     borderWidth: '6px 0px 6px 6px',
        //     top: ((this.warpperHeight/2)-6) + 'px',
        //     left: -13 + 'px',
        //     borderColor: 'transparent transparent transparent #000'
        //   }
        // }
        return style
    },
    msgStyle: function(){
      let style = {}
        if(this.placement == 'top'){
          style = {
            top: '-36px',
            left: 0,
          }
        }
        else if(this.placement == 'right'){
          style = {
            top: '0px',
            left: (this.warpperWidth + 10) + 'px',
          }
        }
        else if(this.placement == 'bottom'){
          style = {
            top: (this.warpperHeight + 8) + 'px',
            left: 0,
          }
        }
        // else if(this.placement == 'left'){
        //   style = {
        //     top: '0px',
        //     left: -(this.warpperWidth + 10) + 'px',
        //   }
        // }
        return style
    }
  },

  methods: {
    mouseenter: function(){
      this.isShow = true
    },
    mouseleave: function(){
      this.isShow = false
    },
  }
}
</script>