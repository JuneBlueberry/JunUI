<!-- JunChen 2018-11-20 进度条Progress组件 -->
<template>
  <div class="jun-progress-div">
    <div class="progress-line">
      <div 
        :style="warpperStyle"
        :class="['progress-warpper', {'progress-warpper-inside': inside}]">
        <div
          :style="activeStyle" 
          :class="['line-active', 'progress-type-'+type]">
          <div v-if="inside" class="progress-number">
            <span>{{percentage>100?100:percentage<0?0:percentage}}%</span>
          </div>
        </div>
      </div>
      <div 
        v-if="!inside"
        class="progress-number">
        <span>{{percentage>100?100:percentage<0?0:percentage}}%</span>
      </div>
    </div>
    
  </div>
</template>

<script>
import { oneOf } from '../../../utils/assist'

export default {
  name: 'jun-progress',
  props: {
    percentage: {
      required: true,
      type: Number,
      default: 0
    },
    cate: {
      type: String
    },
    type: {
      type: String,
      validator (value) {
        return oneOf(value, ['primary','success','info','warning','error'])
      },
      default: 'primary'
    },
    color: {
      type: String,
    },
    inside: {
      type: Boolean,
      default: false
    },
    borderRound: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {
    activeStyle: function(){
      let style = {}
      style.width = (this.percentage>100?100:this.percentage<0?0:this.percentage) + '%'
      if(this.color != undefined && this.color != ''){
        style.backgroundColor = this.color
      }
      if(this.borderRound){
        style.borderRadius = this.inside ? '9px' : '4px'
      }
      return style
    },
    warpperStyle: function(){
      let style = {}
      if(this.borderRound){
        style.borderRadius = this.inside ? '9px' : '4px'
      }
      return style
    }
  },

  methods: {}
}
</script>