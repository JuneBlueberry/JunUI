<!-- JunChen 2018-10-15 下拉选择Select组件 -->
<template>
  <div class="jun-select-div">
    <div class="select-title" @click="selectValue">请选择</div>
    <transition name="selectDiv">
      <div class="select-options" v-if="isSelectDivShow">
        <!-- <ul v-for="(item, index) in data" :key="index" >
        </ul> -->
        <ul class="select-list"></ul>
        <ul class="select-optgroup">
          <li class="select-label">JavaScript</li>
          <li class="select-option">jQuery</li>
          <li class="select-option st_selected">ReactJS</li>
          <li class="select-option">AngularJS</li>
        </ul>
        <ul class="select-optgroup">
          <li class="select-label">HTML</li>
          <li class="select-option" data-value="HTML5" data-index="3">HTML 5</li>
          <li class="select-option" data-value="XML" data-index="4">XML</li>
          <li class="select-option" data-value="XHTML" data-index="5">XHTML</li>
        </ul>
        <ul class="select-list">
          <li class="select-option" data-value="css" data-index="6">CSS/SCSS/LESS</li>
          <li class="select-option" data-value="more" data-index="7">More Options Here</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "jun-select",
  props: {
    data: {
      type: Array,
      default: function(){
        return [
          {
            group: 'JavaScript',
            list: [
              {label: 'jQuery', value: 'jQuery'},
              {label: 'ReactJS', value: 'ReactJS'},
              {label: 'AngularJS', value: 'AngularJS'}
            ]
          },
          {
            group: 'HTML',
            list: [
              {label: 'HTML 5', value: 'HTML 5'},
              {label: 'XML', value: 'XML'},
              {label: 'XHTML', value: 'XHTML'}
            ]
          },
          {label: 'CSS/SCSS/LESS', value: 'CSS/SCSS/LESS'},
          {label: 'More Options Here', value: 'More Options Here'}
        ]
      }
    }
  },
  data() {
    return {
      isSelectDivShow: false
    };
  },

  components: {},

  computed: {},

  methods: {
    selectValue: function(){
      this.isSelectDivShow = !this.isSelectDivShow
    }
  }
};
</script>