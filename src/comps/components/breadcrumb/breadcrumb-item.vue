<!-- JunChen 2019-03-08 breadcrumb-item 组件 -->
<template>
  <div class="jun-breadcrumb-item-div">
    <span 
      :class="['breadcrumb-item-title', {'is-active': active, 'is-hover': !active}]"
      @click="handleClick">桌面</span>
    <jun-icon v-if="disabled" type="icon-doubleright" :size="18" color="#dddddd"></jun-icon>
  </div>
</template>

<script>
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
    }
  },
  data () {
    return {
      disabled: true
    };
  },

  components: {},

  computed: {},

  methods: {
    handleClick: function(){
      window.location.href = this.link
    }
  }
}
</script>