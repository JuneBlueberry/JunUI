<!-- JunChen 2019-03-08 breadcrumb-item 组件 -->
<template>
  <div class="jun-breadcrumb-item-div">
    <span 
      :class="['breadcrumb-item-title', {'is-active': isActive, 'is-hover': !isActive}]"
      @click="handleClick">{{label}}</span>
    <jun-icon v-if="disabled" type="icon-doubleright" :size="18" color="#dddddd"></jun-icon>
  </div>
</template>

<script>
import { oneOf, findComponentUpward } from '../../../utils/assist';

export default {
  name: 'jun-breadcrumb-item',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: '#'
    },
    label: {
      type: String,
      default: '#'
    }
  },
  data () {
    return {
      disabled: true,
      isActive: this.active,
      parent: findComponentUpward(this, 'jun-breadcrumb'),
    };
  },

  components: {},

  computed: {},

  methods: {
    handleClick: function(){
      this.parent.updateVal(this.label)
      window.location.href = this.link
    }
  }
}
</script>