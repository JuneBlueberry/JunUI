<!-- JunChen 手风琴子组件 2019-02-19 -->
<template>
  <div class="jun-collapse-item-div">
    <div 
      :class="['collapse-item-title']"
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
export default {
  name: 'jun-collapse-item',
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    }
  },
  data () {
    return {
      isOpen: false
    };
  },

  components: {},

  computed: {},

  methods: {
    handleClick: function(){
      this.isOpen = !this.isOpen
    }
  }
}
</script>