<!-- JunChen 手风琴Collapse组件 2019-02-19 -->
<template>
  <div class="jun-collapse-div">
    <slot></slot>
  </div> 
</template>

<script>
import { findComponentsDownward } from "../../../utils/assist";

export default {
  name: 'jun-collapse',
  props: {
    init: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'a'
    }
  },
  data () {
    return {
      currentName: this.init,
      currentNameList: [],
    };
  },

  components: {},

  computed: {},

  methods: {
    updateValue: function() {
      const CollapseItem = findComponentsDownward(this, "jun-collapse-item");
      CollapseItem.forEach(collapse => {
        if(this.currentName != collapse.currentName && collapse.isOpen){
          collapse.isOpen = false
        }
      });
    },
    change: function(data){
      if(data.isOpen){
        this.currentName = data.currentName
      }
      if(data.name == undefined || data.name == ''){
        this.$emit('change', undefined, data.el)
      }else{
        this.$emit('change', data.name, data.el)
      }
    }
  },

  watch: {
    currentName: {
      immediate: true,
      handler: function(){
        this.updateValue()
      }
    }
  }
}
</script>