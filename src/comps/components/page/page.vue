<!-- By Abner 2018-10-28 分页Page组件 -->
<template>
  <div class="jun-page-div">
      <div class="page-left-warpper"></div>
      <div class="page-mian-warpper">
          <ul>
              <li><span><jun-icon type='icon-doubleleft' :size='14'></jun-icon></span></li>
              <li><span><jun-icon type='icon-return' :size='14'></jun-icon></span></li>
              <li><span class="page-active">1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><span><jun-icon type='icon-enter' :size='14'></jun-icon></span></li>
              <li><span><jun-icon type='icon-doubleright' :size='14'></jun-icon></span></li>
          </ul>
      </div>
      <div class="page-right-warpper"></div>
  </div>
</template>

<script>
  export default {
    name: 'jun-page',
    props: {},
    data () {
      return {}
    },

    components: {},

    methods: {}
  }
</script>