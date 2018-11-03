<!-- JunChen 2018-11-01 标签页Tabs组件 -->
<template>
  <div class="jun-tabs-div">
    <div class="tabs-head-warpper">
      <div class="tabs-head-left">
        <div
          v-for="(item,index) in tabList"
          :key="index"
          @click="onClickTab(item.name)" 
          :class="['tabs-head-item', 'tabs-color-'+color, item.name==currentName?'active':'']">{{item.label}}</div>
      </div>
      <div class="tabs-head-right">
        <slot name="tabs-rigth-div"></slot>
      </div>
    </div>
    <div class="tabs-main-warpper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { findComponentsDownward, oneOf } from '../../../utils/assist'

export default {
  name: 'jun-tabs',
  props: {
    value: {
      type: String,
      default: 'tab1'
    },
    color: {
      type: String,
      validator: function(value){
        return oneOf(value, ['blue','green','red','yellow'])
      },
      default: 'blue'
    }
  },
  data () {
    return {
      currentName: this.value,
      tabList: []
    };
  },

  components: {},

  computed: {},

  mounted: function(){
    this.updateTabName()
  },

  methods: {
    onClickTab: function(tab){
      this.currentName = tab
    },

    updateTabName: function(){
      let tabList = []
      let value = this.currentName
      const Tabs = findComponentsDownward(this, 'jun-tabs-item')
      if(Tabs.length > 0){
        Tabs.forEach(tab => {
          let _tab = {}
          _tab.name = tab.name
          _tab.label = tab.label
          tabList.push(_tab)
          tab.currentName = value
        })
      }
      this.tabList = tabList
    },
  },

  watch: {
    currentName: {
      handler: function(val){
        this.updateTabName()

        this.$emit('input', val)
        this.$emit('change', val)
      }
    }
  }
}
</script>