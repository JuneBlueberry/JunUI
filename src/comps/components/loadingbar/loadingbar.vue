<!-- By Abner 2018-11-21 加载条LoadingBar组件 -->
<template>
  <div class="jun-loadingbar-div">
    <div class="loadingbar-warpper">
      <div 
        class="loadingbar-action"
        :style="actionStyle"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jun-loadingbar',
    props: {
      percentage: {
        type: Number
      },
    },
    data () {
      return {
      }
    },

    components: {},

    computed: {
      actionStyle: function(){
        let style = {}
        if(this.percentage != undefined){
          let _percentage = this.percentage < 0 ? 0 : this.percentage > 100 ? 100 : this.percentage
          style.width = _percentage + 'vw'
        }
        return style
      }
    },

    methods: {}
  }
</script>