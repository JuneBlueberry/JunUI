<!-- JunChen 2018-11-05 Table组件 -->
<template>
  <div :class="['jun-table-div']">
    <div :class="['table-warpper', {'table-warpper-border': border}]">
      <div class="table-header-warpper">
        <table class="table-header">
          <thead>
            <tr class="header-tr">
              <th 
                :class="['header-th', {'header-th-border': border}]" 
                v-for="(item, index) in header" :key="index">
                <span>{{item.label}}</span>
              </th>
              <th
                v-if="height!=undefined && height!=''" 
                class="header-th-rigth"></th>
            </tr>
          </thead>
        </table>
      </div>
      <div 
        class="table-bodyer-warpper"
        :style="bodyerStyle">
        <table class="table-bodyer">
          <tbody>
            <tr
              v-for="(item, index) in bodyer" :key="index"
              :class="['bodyer-tr',{'tr-active': index==activeRow,'tr-stripe': stripe}]"
              @click="selectRow(index)">
              <td 
                :class="['bodyer-td', {'bodyer-td-border': border}]" 
                v-for="(itemson, index) in header" :key="index">
                <slot :name="itemson.key" :row="item">
                  <span>{{item[itemson.key]}}</span>
                </slot>
              </td>
            </tr>
            <tr v-if="false">
              <td colspan="3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jun-table',
  props: {
    headerData: {
      type: Array,
      default: function(){
        return [
          {label: '姓名', key: 'name'},
          {label: '年龄', key: 'age'},
          {label: '性别', key: 'sex'},
          {label: '手机号', key: 'mob'},
          {label: '操作', key: 'caozuo'}
        ]
      }
    },
    bodyerData: {
      type: Array,
      default: function(){
        return [
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', age: 23, sex: '男', mob: '17621467103'},
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'},
        ]
      }
    },
    height: {
      type: [Number, String]
    },
    border: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      header: this.headerData,
      bodyer: this.bodyerData,
      activeRow: -1,
    };
  },

  components: {},

  computed: {
    bodyerStyle: function(){
      let style = {};
      if(typeof this.height == 'number'){
        style.height = this.height + 'px'
        style.overflowY = 'scroll'
      }else if(typeof this.height == 'string' && this.height !== ''){
        style.height = this.height
        style.overflowY = 'scroll'
      }
      return style;
    }
  },

  methods: {
    selectRow: function(index){
      this.activeRow = index == this.activeRow ? -1 : index
    }
  }
}
</script>