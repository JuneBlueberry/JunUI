<!-- JunChen 2018-10-23 评分组件 -->
<template>
  <div class="jun-rate-div">
    <jun-icon
      v-for="index in counts" 
      :key="index" 
      :class="[index<=nowCount?'jun-rate-active':'jun-rate-default']"
      type="icon-collection_fill"
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
    counts: {
      type: Number,
      default: 5
    },
  },
  data () {
    return {
      currentCount: this.value,
      nowCount: this.value
    };
  },

  components: {},

  computed: {},

  methods: {
    selectItem: function(index){
      this.currentCount = index
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