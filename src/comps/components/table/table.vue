<!-- JunChen 2018-11-05 Table组件 -->
<template>
  <div :class="['jun-table-div']">
    <table :class="['table-main', {'table-main-border': border}]">
      <thead>
        <tr>
          <th v-for="(item, index) in header" :key="index">
            <span>{{item.label}}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(item, index) in bodyer" :key="index"
          :class="[{'tr-active': index==activeRow,'tr-stripe': stripe}]"
          @click="selectRow(index)">
          <td v-for="(itemson, index) in header" :key="index">
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
          {name: 'abner', sex: '男', age: 23, mob: '17621467103'}
        ]
      }
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

  computed: {},

  methods: {
    selectRow: function(index){
      this.activeRow = index == this.activeRow ? -1 : index
    }
  }
}
</script>