<!-- JunChen 2018-11-05 Table组件 -->
<template>
  <div :class="['jun-table-div']">
    <!-- 表主体 -->
    <div
      :class="['table-warpper', {'table-warpper-border': border}]"
      :style="tableStyle"
      ref='ref_table'>
      <!-- 表头 -->
      <div 
        class="table-header-warpper" 
        ref="ref_table_header">
        <table class="table-header">
          <thead>
            <tr class="header-tr">
              <th 
                v-if="checkbox"
                :class="['header-th','header-th-checkbox', {'header-th-border': border}]">
                <jun-checkbox @change="SelectAllCheckBox"></jun-checkbox>
              </th>
              <th 
                :class="['header-th', {'header-th-border': border, 'fixed-right': fixedRight}]"
                :style="{width: item.width==undefined?'':item.width+'px'}"
                v-for="(item, index) in header" :key="index">
                <span>{{item.label}}</span>
              </th>
              <th
                v-if="tableData.isHeightScroll" 
                class="header-th-rigth"></th>
            </tr>
          </thead>
        </table>
      </div>
      <!-- 表身数据 -->
      <div 
        class="table-bodyer-warpper"
        :style="bodyerStyle"
        ref="ref_table_bodyer"
        @scroll="scrollHeaderX">
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
                :class="['bodyer-td', {'bodyer-td-border': border, 'fixed-right': fixedRight}]"
                :style="{width: itemson.width==undefined?'':itemson.width+'px'}"
                v-for="(itemson, index) in header" :key="index">
                <slot :name="itemson.key" :row="item">
                  <span>{{item[itemson.key]}}</span>
                </slot>
              </td>
            </tr>
          </tbody>
        </table>
        <span class="table-bodye-null" v-if="isNull">暂无数据</span>
      </div>
      <!-- 表右侧 -->
      <div 
        v-if="fixedRight"
        :class="['table-right-warpper', {'table-warpper-border': border}]"
        :style="rightStyle">
        <div class="table-header-warpper">
          <table class="table-header">
            <thead>
              <tr class="header-tr">
                <!-- <th 
                  v-if="checkbox"
                  :class="['header-th','header-th-checkbox', {'header-th-border': border}]">
                  <jun-checkbox @change="SelectAllCheckBox"></jun-checkbox>
                </th> -->
                <th 
                  :class="['header-th', {'header-th-border': border}]"
                  :style="{width: item.width==undefined?'120px':item.width+'px'}"
                  v-for="(item, index) in header" :key="index">
                  <span>{{item.label}}</span>
                </th>
                <th
                v-if="tableData.isHeightScroll" 
                class="header-th-rigth"></th>
              </tr>
            </thead>
          </table>
        </div>
        <div 
          :class="['table-bodyer-warpper']"
          :style="[bodyerStyle, {top: tableData.headerHeight+'px'}]"
          ref="ref_table_fixed_bodyer">
          <table class="table-bodyer">
            <tbody>
              <tr
                v-for="(item, index) in bodyer" :key="index"
                :class="['bodyer-tr',{'tr-active': index==activeRow,'tr-stripe': stripe}]">
                <!-- <td 
                  v-if="checkbox"
                  :class="['bodyer-td', 'bodyer-td-checkbox', {'bodyer-td-border': border}]">
                  <jun-checkbox @change="SelectCheckBox" :param="item" :value="defaultSelect"></jun-checkbox>
                </td> -->
                <td 
                  :class="['bodyer-td', {'bodyer-td-border': border}]"
                  :style="{width: itemson.width==undefined?'120px':itemson.width+'px'}"
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
          // {label: '姓名', key: 'name'},
          // {label: '年龄', key: 'age'},
          // {label: '性别', key: 'sex'},
          // {label: '手机号', key: 'mob'},
          // {label: '操作', key: 'caozuo', width: 120}
        ]
      }
    },
    bodyerData: {
      type: Array,
      default: function(){
        return []
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
    },
    fixedRight: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      header: this.headerData,
      bodyer: this.bodyerData,
      activeRow: -1,
      checkBoxList: [],
      defaultSelect: false,
      clientHeight: 0,

      tableData: {
        tableWidth: 0,
        tableHeight: 0,
        headerWidth: 0,
        headerHeight: 0,
        bodyerWidth: 0,
        bodyerHeight: 0,
        bodyerActualHeight: 0,
        bodyerActualWidth: 0,
        isHeightScroll: false,
        isWidthScoll: false
      },

      rightStyle: {
        width: 0,
        height: 0
      },

      isNull: this.bodyerData.length <= 0 ? true : false
    };
  },

  mounted: function(){
    this.getTableData()
    this.setTableHeight()

    //window.onresize = this.temp()
  },

  components: {},

  computed: {
    bodyerStyle: function(){
      let style = {}
      if(this.height != undefined){
        if(typeof this.height == 'number'){
          style.height = this.height + 'px'
        }else if(typeof this.height == 'string' && this.height !== ''){
          style.height = this.height
        }
      }else{
        if(this.isNull){
          style.height = '60px'
        }
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
    },
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
    },
    scrollHeaderX: function(e){
      this.$refs.ref_table_header.scrollLeft = e.target.scrollLeft
      if(this.fixedRight){
        this.$refs.ref_table_fixed_bodyer.scrollTop = e.target.scrollTop
      }
    },
    setTableHeight: function(){
      let height = this.tableData.isWidthScoll ? this.tableData.tableHeight - 17 : this.tableData.tableHeight
      if(height > 0){
        this.rightStyle.height = height + 'px'
      }
      if(this.bodyer.length > 0){
        if(this.bodyer[this.bodyer.length-1].width != undefined){
          this.rightStyle.width = this.bodyer[this.bodyer.length-1].width + 'px'
        }else{
          this.rightStyle.width = '120px'
        }
      }
      if(this.tableData.isHeightScroll){
        this.rightStyle.right = '17px'
      }
    },
    getTableData: function(){
      this.tableData.tableWidth = this.$refs.ref_table.clientWidth
      this.tableData.tableHeight = this.$refs.ref_table.clientHeight
      this.tableData.headerWidth = this.$refs.ref_table_header.clientWidth
      this.tableData.headerHeight = this.$refs.ref_table_header.clientHeight
      this.tableData.bodyerWidth = this.$refs.ref_table_bodyer.clientWidth
      this.tableData.bodyerHeight = this.$refs.ref_table_bodyer.clientHeight
      this.tableData.bodyerActualHeight = this.$refs.ref_table_bodyer.getElementsByClassName('table-bodyer')[0].clientHeight
      this.tableData.bodyerActualWidth = this.$refs.ref_table_bodyer.getElementsByClassName('table-bodyer')[0].clientWidth
      if(this.height != undefined && this.height != ''){
        this.tableData.isHeightScroll = this.height < this.tableData.bodyerActualHeight ? true : false
      }
      if(this.tableData.bodyerActualWidth > this.tableData.bodyerWidth){
        this.tableData.isWidthScoll = true
      }
    },
    temp: function() {
        this.clientHeight = document.documentElement.clientHeight
    }
  },

  watch: {
    clientHeight: {
      handler: function(value){
        console.log(value)
      }
    }
  }
}
</script>