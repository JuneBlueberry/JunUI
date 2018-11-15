<!-- JunChen 2018-10-23 评分组件 -->
<template>
  <div class="jun-rate-div">
    <jun-icon
      v-for="index in counts" 
      :key="index" 
      :style="index<=nowCount?activeStyles:defaultStyles"
      :type="icon"
      color='#e9e9e9'
      @mouseover.native="overItem(index)"
      @mouseout.native="outItem"
      @click.native="selectItem(index)">
    </jun-icon>
  </div>
</template>

<script>
export default {
  name: 'jun-rate',
  props: {
    value: {
      type: Number,
      default: 0
    },
    //数量
    counts: {
      type: Number,
      default: 5
    },
    //图标类别，参见Icon
    icon: {
      type: String,
      default: 'icon-collection_fill'
    },
    //是否可以清除
    clearable: {
      type: Boolean,
      default: false
    },
    //未选中的背景颜色
    styleColorDefault: {
      type: String,
      default: '#e9e9e9'
    },
    //选中时的背景颜色
    styleColorActive: {
      type: String,
      default: '#fd9726'
    }
  },
  data () {
    return {
      currentCount: this.value,
      nowCount: this.value
    };
  },

  components: {},

  computed: {
    defaultStyles: function(){
      let style = {};
      if(this.styleColorDefault){
        style.color = this.styleColorDefault + ' !important'
      }
      return style;
    },
    activeStyles: function(){
      let style = {};
      if(this.styleColorDefault){
        style.color = this.styleColorActive + ' !important'
      }
      return style;
    }
  },

  methods: {
    selectItem: function(index){
      if(this.clearable && this.currentCount == index) {
        this.currentCount = 0
      } else {
        this.currentCount = index
      }
      this.$emit('input', this.currentCount)
      this.$emit('change', this.currentCount)
    },
    overItem: function(index){
      this.nowCount = index
    },
    outItem: function(){
      this.nowCount = 0
      if(this.currentCount > 0){
        this.nowCount = this.currentCount
      }
    }
  }
}
</script>