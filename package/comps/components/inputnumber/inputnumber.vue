<!-- By Abner 2019-03-19 数字输入组件 inputnumber -->
<template>
  <div class="jun-inputnumber-div">
    <div 
      :class="['jun-inputnumber-warpper', 'jun-warpper-'+mode]">
      <div v-if="disabled" class="is-disabled"></div>
      <span class="jun-btn-left" @click="handleReduce">
        <jun-icon type="icon-jianhaocu" color="#909399"></jun-icon>
      </span>
      <input class="jun-inputnumber" type="text" v-model="currentValue" @blur="onBlur" >
      <span class="jun-btn-right" @click="handleAdd">
        <jun-icon type="icon-add" color="#909399"></jun-icon>
      </span>
    </div>
  </div>
</template>

<script>
  import { oneOf } from '../../../utils/assist';
  var reg = /^[1-9]\d*$/

  export default {
    name: 'jun-input-number',
    props: {
      value: {
        type: [Number, String]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      mode: {
        type: String,
        validator (value) {
          return oneOf(value, ['leftright','topdown','left','right'])
        },
        default: 'topdown'
      }
    },
    data () {
      return {
        currentValue: this.value,
        temporaryValue: 0
      }
    },

    components: {},

    computed: {},

    methods: {
      handleReduce: function(){
        this.currentValue--
      },
      handleAdd: function(){
        this.currentValue++
      },
      onBlur: function(){
        if (!reg.test(this.value)) {
          this.currentValue = this.temporaryValue
        }
      },
      updateValue: function(){
        this.$emit('input', this.currentValue)
        this.$emit('change', this.currentValue)
      }
    },

    watch: {
      value: function(val){
        if (reg.test(val)) {
          this.currentValue = val
          this.temporaryValue = val
        }
      },
      currentValue: {
        handler: 'updateValue'
      }
    }
  }
</script>