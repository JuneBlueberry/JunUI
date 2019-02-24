<!-- JunChen 手风琴子组件 2019-02-19 -->
<template>
  <div class="jun-collapse-item-div">
    <div 
      :class="['collapse-item-title', { 'collapse-item-title-isopen': !isOpen }]"
      @click="handleClick">
      <span>{{label}}</span>
      
      <jun-icon 
        class="collapse-item-icon" 
        :type="isOpen?'icon-packup':'icon-unfold'" 
        color="#d0d5da" 
        :size="18"></jun-icon>
    </div>
    <transition name="content-warpper">
      <div 
        :class="['collapse-item-content', {'border-bottom': isOpen}]"
        v-show="isOpen">
        <slot></slot>  
      </div>
    </transition>
  </div>
</template>

<script>
import { findComponentUpward } from '../../../utils/assist';
export default {
  name: 'jun-collapse-item',
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String
    }
  },
  data () {
    return {
      isOpen: false,
      currentName: this.name || Math.random().toString(),
      parent: findComponentUpward(this, 'jun-collapse'),
    };
  },

  components: {},

  computed: {},

  methods: {
    handleClick: function(){
      this.isOpen = !this.isOpen
      this.parent.change({
        isOpen: this.isOpen,
        name : this.name,
        currentName: this.currentName,
        el: this
      })
      this.$emit('change', this.isOpen?'open':'close')
    }
  }
}
</script>