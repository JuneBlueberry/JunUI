<!-- By Abner 2018-11-04 Card组件 -->
<template>
  <div 
    class="jun-card-div">
      <div
        :class="['card-warpper', 'card-type-'+type]"
        :style="divStyles">
        <div class="card-title" v-if="$slots.title!=undefined">
          <slot name="title"></slot>
        </div>
        <div class="card-main">
          <slot></slot>
        </div>
        <div class="card-footer">
          <transition name="footer">
            <div v-if="$slots.footer!=undefined" class="footer-desc">
                <div v-show="isOpen" style="padding: 16px">
                  <slot name="footer"></slot>
                </div>
            </div>
           </transition>
          <div 
            :class="['footer-open', {'footer-open-topborder': !isOpen}]"
            v-if="hidden"
            @click="isOpen=!isOpen">
            <span>{{isOpen?'点击收起':'点击展开'}}</span>
            <jun-icon :type="isOpen?'icon-packup':'icon-unfold'" size="20px"></jun-icon>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import { oneOf } from '../../../utils/assist'

  export default {
    name: 'jun-card',
    props: {
      type: {
        type: String,
        validator (value) {
            return oneOf(value, ['default', 'hoverlight', 'zoom', 'border'])
        },
        default: 'default'
      },
      width: [Number, String],
      hidden: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isOpen: !this.hidden,
        descStyle: {}
      }
    },

    components: {},

    computed: {
      divStyles: function(){
        let style = {}
        if(typeof this.width == 'number'){
          style.width = this.width + 'px'
        }else if(typeof this.width == 'string' && this.width !== ''){
          style.width = this.width
        }
        return style
      }
    },

    mounted: function(){

    },

    methods: {

    },

    watch: {

    }
  }
</script>