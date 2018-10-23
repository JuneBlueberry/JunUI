<!-- JunChen 2018-10-23 评分组件 -->
<template>
  <div>
    <jun-icon type="icon-collection_fill" color='#e9e9e9' @mouseover.native="selectItem"></jun-icon>
    <jun-icon type="icon-collection_fill" color='#e9e9e9'></jun-icon>
    <jun-icon type="icon-collection_fill" color='#e9e9e9'></jun-icon>
    <jun-icon type="icon-collection_fill" color='#e9e9e9'></jun-icon>
    <jun-icon type="icon-collection_fill" color='#e9e9e9'></jun-icon>
  </div>
</template>

<script>
export default {
  name: 'jun-rate',
  props: {},
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
    selectItem: function(){
      console.log(111)
    }
  }
}
</script>