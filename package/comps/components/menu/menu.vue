<!-- By Abner 2018-11-14 菜单组件Menu -->
<template>
  <div :class="['jun-menu-div']">
    <div :class="['menu-warpper', 'menu-theme-'+theme]">
      <ul>
        <li class="menu-item menu-item-active">
          <div>
            <span>主页</span>
          </div>
        </li>
        <li class="menu-item">
          <div>
            <span>主页</span>
          </div>
        </li>
        <li class="menu-item">
          <div>
            <span>主页</span>
          </div>
        </li>
        <li class="menu-item">
          <div>
            <span>主页</span>
          </div>
        </li>
        <li class="menu-item">
          <div>
            <span>主页</span>
          </div>
        </li>
        <li class="menu-item">
          <div>
            <span>主页</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jun-menu',
    props: {
      theme: {
        type: String,
        default: 'light'
      }
    },
    data () {
      return {}
    },

    components: {},

    computed: {},

    methods: {}
  }
</script>