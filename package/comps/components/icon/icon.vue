<!-- JunChen 2018-09-28 字体图标 -->
<template>
  <i 
    :class="['jun-icon', 'iconfont', type]"
    :style="styles"
    @click="handleClick"></i>
</template>

<script>
export default {
  name: 'jun-icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: [Number, String],
    color: {
      type: String
    }
  },
  data () {
    return {
    };
  },

  computed: {
    styles: function(){
      let style = {}
      // 获取尺寸大小
      if(typeof this.size == 'number'){
        style.fontSize = this.size + 'px'
      }else if(typeof this.size == 'string' && this.size !== ''){
        style.fontSize = this.size
      }
      // 获取颜色
      if(this.color != undefined && this.color != ''){
        style.color = this.color
      }
      return style
    }
  },

  methods: {
    handleClick: function(event){
      this.$emit('click', event)
    }
  }
}
</script>
