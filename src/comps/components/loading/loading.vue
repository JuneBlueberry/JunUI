<!-- JunChen 2019-01-29 Loading加载组件 -->
<template>
  <div class="jun-loading-div">
    <template v-if="type=='spinner'">
      <div class="spinner spinner-pulse loading-warpper"></div>
    </template>
    <template v-else-if="type=='double_bounce'">
      <div class="double-bounce loading-warpper">
        <div class="sk-child sk-double-bounce1"></div>
        <div class="sk-child sk-double-bounce2"></div>
      </div>
    </template>
    <template v-else-if="type=='wave'">
      <div class="wave loading-warpper">
        <div class="sk-rect sk-rect1"></div>
        <div class="sk-rect sk-rect2"></div>
        <div class="sk-rect sk-rect3"></div>
        <div class="sk-rect sk-rect4"></div>
        <div class="sk-rect sk-rect5"></div>
      </div>
    </template>
    <template v-else-if="type=='fading_circle'">
      <div class="fading-circle loading-warpper">
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
      </div>
    </template>
    <template v-else-if="type=='cube_grid'">
      <div class="cube-grid loading-warpper">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'jun-loading',
  props: {
    type: {
      type: String,
      default: 'cube_grid'
    }
  },
  data () {
    return {
    };
  },

  computed: {},

  methods: {}
}
</script>