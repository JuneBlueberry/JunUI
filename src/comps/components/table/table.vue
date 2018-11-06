<!-- JunChen 2018-11-05 Table组件 -->
<template>
  <div :class="['jun-table-div']">
    <table :class="['table-main', {'table-main-border': border}]">
      <thead>
        <tr>
          <th v-for="(item, index) in data_header" :key="index">
            <span>{{item.label}}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span>111</span></td>
          <td><span>111</span></td>
          <td><span>111</span></td>
        </tr>
        <tr>
          <td><span>222</span></td>
          <td><span>222</span></td>
          <td><span>222</span></td>
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
    header: {
      type: Array,
      default: function(){
        return [
          {label: '姓名', key: 'name'},
          {label: '年龄', key: 'age'},
          {label: '性别', key: 'sex'},
        ]
      }
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      data_header: this.header
    };
  },

  components: {},

  computed: {},

  methods: {}
}
</script>