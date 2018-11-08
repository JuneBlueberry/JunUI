<!-- JunChen 2018-11-05 Table组件 -->
<template>
  <div :class="['jun-table-div']">
    <div 
      :class="['table-warpper', {'table-warpper-border': border}]"
      :style="tableStyle">
      <div class="table-header-warpper">
        <table class="table-header">
          <thead>
            <tr class="header-tr">
              <th 
                v-if="checkbox"
                :class="['header-th','header-th-checkbox', {'header-th-border': border}]">
                <jun-checkbox @change="SelectAllCheckBox"></jun-checkbox>
              </th>
              <th 
                :class="['header-th', {'header-th-border': border}]"
                :style="{width: item.width==undefined?'':item.width+'px'}"
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
                v-if="checkbox"
                :class="['bodyer-td', 'bodyer-td-checkbox', {'bodyer-td-border': border}]">
                <jun-checkbox @change="SelectCheckBox" :param="item" :value="defaultSelect"></jun-checkbox>
              </td>
              <td 
                :class="['bodyer-td', {'bodyer-td-border': border}]"
                :style="{width: itemson.width==undefined?'':itemson.width+'px'}"
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
import { getClientWidth } from '../../../utils/assist'

export default {
  name: 'jun-table',
  props: {
    headerData: {
      type: Array,
      default: function(){
        return [
          {label: '姓名', key: 'name', width: 90},
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
    },
    checkbox: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: Number,
      default: 440
    },
    maxWidth: {
      type: Number,
      default: 0,
    }
  },
  data () {
    return {
      header: this.headerData,
      bodyer: this.bodyerData,
      activeRow: -1,
      checkBoxList: [],
      defaultSelect: false
    };
  },

  components: {},

  computed: {
    bodyerStyle: function(){
      let style = {}
      if(typeof this.height == 'number'){
        style.height = this.height + 'px'
        style.overflowY = 'scroll'
      }else if(typeof this.height == 'string' && this.height !== ''){
        style.height = this.height
        style.overflowY = 'scroll'
      }
      return style
    },
    tableStyle: function(){
      let style = {};
      if(this.minWidth > 0){
        style.minWidth = this.minWidth + "px"
      }
      if(this.maxWidth > 0){
        style.maxWidth = this.maxWidth + "px"
      }
      return style
    }
  },

  methods: {
    SelectCheckBox: function(value, item){
      if(value){
        if(this.checkBoxList.indexOf(item) < 0){
          this.checkBoxList.push(item)
        }
      }else{
        if(this.checkBoxList.indexOf(item) >= 0){
          this.checkBoxList.splice(this.checkBoxList.indexOf(item), 1);
        }
      }
      this.$emit('on-select', this.checkBoxList, item)
      this.$emit('on-select-checkbox', this.checkBoxList)
    },
    SelectAllCheckBox: function(value){
      this.defaultSelect = value
      if(value){
        this.checkBoxList = this.bodyerData
      }else{
        this.checkBoxList = []
      }
      this.$emit('on-select-all', this.checkBoxList, value)
    },
    selectRow: function(index){
      this.activeRow = index == this.activeRow ? -1 : index
    }
  }
}
</script>