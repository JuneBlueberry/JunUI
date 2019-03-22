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
          <jun-checkbox-group v-model="selectSourceValue" @change="handleChangeSourceVal">
            <label v-for="item in currentSourceList" :key="item.key" class="transfer-list-item">
              <jun-checkbox class="title-checkbox" :label="item.key">
                <span></span>
              </jun-checkbox>
              <span>{{item.label + '-' + item.key}}</span>
            </label>
          </jun-checkbox-group>
        </div>
      </div>
      <div class="transfer-middle">
        <div class="middle-warpper">
          <div :class="['middle-right', {'is-active': isSourceActive}]" @click="handleClickAddVal">
            <jun-icon type="icon-doubleright" :size="20" color="#dcdee2"></jun-icon>
          </div>
          <div :class="['middle-left', {'is-active': isTargetActive}]" @click="handleClickRemoveVal">
            <jun-icon type="icon-doubleleft" :size="20" color="#dcdee2"></jun-icon>
          </div>
        </div>
      </div>
      <div class="transfer-right">
        <div class="transfer-title">
          <jun-checkbox class="title-checkbox"></jun-checkbox>
          <span>目标数据</span>
          <span class="title-num">1/11</span>
        </div>
        <div class="transfer-list">
          <jun-checkbox-group v-model="selectTargetValue" @change="handleChangeTargetVal">
            <label v-for="item in currentTargetList" :key="item.key" class="transfer-list-item">
              <jun-checkbox class="title-checkbox" :label="item.key">
                <span></span>
              </jun-checkbox>
              <span>{{item.label + '-' + item.key}}</span>
            </label>
          </jun-checkbox-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jun-transfer',
  props: {
    sourceData: {
      type: Array,
      default: function(){
        return []
      }
    },
    targetData: {
      type: Array,
      default: function(){
        return []
      }
    }
  },
  data () {
    return {
      currentSourceList: this.sourceData,
      currentTargetList: this.targetData,

      isSourceActive: false,
      isTargetActive: false,
      selectSourceValue: [],
      selectTargetValue: [],
    };
  },

  components: {},

  computed: {
    
  },

  methods: {
    handleChangeSourceVal: function(val){
      this.isSourceActive = (val.length > 0)
    },
    handleChangeTargetVal: function(val){
      this.isTargetActive = (val.length > 0)
    },
    handleClickAddVal: function(){
      var that = this
      if(that.selectSourceValue.length > 0){
        let sourceList = Object.assign([], that.currentSourceList)
        let targetList = Object.assign([], that.currentTargetList)
        that.currentSourceList.forEach(function(item, index){
          if(that.selectSourceValue.indexOf(item.key) > -1){
            targetList.push(item)
            sourceList.splice(sourceList.indexOf(item), 1)
          }
        })
        that.currentSourceList = sourceList
        that.currentTargetList = targetList
      }
      this.isSourceActive = false
      that.$nextTick(function () {
        this.selectSourceValue = []
        this.selectTargetValue = []
      })
      
    },
    handleClickRemoveVal: function(){
      var that = this
      if(that.selectTargetValue.length > 0){
        let sourceList = Object.assign([], that.currentSourceList)
        let targetList = Object.assign([], that.currentTargetList)
        that.currentTargetList.forEach(function(item, index){
          if(that.selectTargetValue.indexOf(item.key) > -1){
            sourceList.push(item)
            targetList.splice(targetList.indexOf(item), 1)
          }
        })
        that.currentSourceList = sourceList
        that.currentTargetList = targetList
      }
      this.isTargetActive = false
      that.$nextTick(function () {
        this.selectSourceValue = []
        this.selectTargetValue = []
      })
    }
  },

  watch: {
    currentTargetList: {
      handler: function(){
        this.$emit('change', this.currentSourceList, this.currentTargetList)
      }
    }
  }
}
</script>