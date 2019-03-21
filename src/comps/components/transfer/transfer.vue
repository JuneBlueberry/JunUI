<!-- JunChen 2019-03-20 Transfer穿梭框组件 -->
<template>
  <div class="jun-transfer-div">
    <div class="transfer-warpper">
      <div class="transfer-left">
        <div class="transfer-title">
          <jun-checkbox class="title-checkbox"></jun-checkbox>
          <span>源数据</span>
          <span class="title-num">1/11</span>
        </div>
        <div class="transfer-list">
          <label v-for="i in 10" class="transfer-list-item">
            <jun-checkbox class="title-checkbox"></jun-checkbox>
            <span>transfer {{i}}</span>
          </label>
        </div>
      </div>
      <div class="transfer-middle">
        <div>
          <jun-icon type="icon-doubleright"></jun-icon>
        </div>
        <div></div>
      </div>
      <div class="transfer-right">
        <div class="transfer-title">
          <jun-checkbox class="title-checkbox"></jun-checkbox>
          <span>源数据</span>
          <span class="title-num">1/11</span>
        </div>
        <div class="transfer-list">
          <label v-for="i in 10" class="transfer-list-item">
            <jun-checkbox class="title-checkbox"></jun-checkbox>
            <span>transfer {{i}}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jun-transfer',
  props: {},
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}
</script>