<!-- JunChen 2018-10-15 下拉选择Select组件 -->
<template>
  <div class="jun-select-div">
    <div class="select-title" @click="clickInputSelect">{{currentValue==''?'请选择':currentValue}}</div>
    <transition name="selectDiv">
      <div class="select-options" v-if="isSelectDivShow">
        <ul v-for="(item, index) in data" 
          :key="index" 
          :class="item.group!=undefined?'select-optgroup':'select-list'">
          <template v-if="item.group!=undefined">
            <li class="select-group">{{item.group}}</li>
            <li 
              v-for="(itemson, index) in item.list"
              class="select-option"
              :key="index"
              @click="selectValue(itemson)">
              <span class="select-label">{{itemson.label}}</span>
              <span v-if="itemson.remark!=undefined" class="select-remark">{{itemson.remark}}</span>
            </li>
          </template>
          <template v-else>
            <li 
              class="select-option"
              @click="selectValue(item)">
              <span class="select-label">{{item.label}}</span>
              <span v-if="item.remark!=undefined" class="select-remark">{{item.remark}}</span>
            </li>
          </template>
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
              {label: 'jQuery', value: 'jQuery', remark: '一个流行的JS库'},
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
      currentValue: '',
      isSelectDivShow: false
    };
  },

  components: {},

  computed: {},

  methods: {
    clickInputSelect: function(){
      this.isSelectDivShow = !this.isSelectDivShow
    },

    selectValue: function(item){
      this.currentValue = item.label
      this.isSelectDivShow = false
      this.$emit('on-select', item)
    }
  },

  watch: {
    currentValue: function(value){
      this.$emit('change', value)
    }
  }
};
</script>