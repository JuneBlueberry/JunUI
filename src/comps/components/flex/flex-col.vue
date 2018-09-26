<!-- JunChen 2018-09-25 栅格布局列 -->
<template>
  <div
    class="jun-flex-col"
    :style="{width:  (100*span/24)+'%'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jun-flex-col',
  props: {
    span: {
      type: Number,
      default: 24
    }
  },
  data () {
    return {
    };
  },

  methods: {}
}
</script>