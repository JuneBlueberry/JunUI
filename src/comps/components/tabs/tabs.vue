<!-- JunChen 2018-11-01 标签页Tabs组件 -->
<template>
  <div class="jun-tabs-div">
    <div class="tabs-head-warpper">
      <div class="tabs-head-left">
        <div
          v-for="(item,index) in tabList"
          :key="index"
          @click="onClickTab(item.name)" 
          :class="['tabs-head-item', item.name==currentName?'active':'']">{{item.label}}</div>
      </div>
    </div>
    <div class="tabs-main-warpper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../../utils/assist'

export default {
  name: 'jun-tabs',
  props: {
    value: {
      type: String,
      default: 'tab1'
    }
  },
  data () {
    return {
      currentName: this.value,
      tabList: [
        {name: 'tab1', label: '标签一'},
        {name: 'tab2', label: '标签二'},
        {name: 'tab3', label: '标签三'}
      ]
    };
  },

  components: {},

  computed: {},

  methods: {
    onClickTab: function(tab){
      this.currentName = tab
    },

    getTabList: function(){
      let tabList = []
      let value = this.currentName
      const Tabs = findComponentsDownward(this, 'jun-tabs-item')
      if(Tabs.length > 0){
        Tabs.forEach(tab => {
          let _tab = {}
          _tab.name = tab.name
          _tab.label = tab.label
          tabList.push(_tab)
          tab.name = value
        })
      }
      this.tabList = tabList
    }
  },

  watch: {
    currentName: {
      handler: 'getTabList',
      immediate: true
    }
  }
}
</script>