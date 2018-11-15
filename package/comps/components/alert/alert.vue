<!-- JunChen 2018-10-19 提醒块Alert组件 -->
<template>
  <div
    :class="['jun-alert-div', 'jun-alert-type-'+type,
      {'is-border': border, 'is-left-border': leftBorder}]"
    v-if="isShow">
    <slot></slot>
    <div class="jun-alert-close" v-if="clearable" @click="clear">
      <jun-icon  type="icon-close" size="16px"></jun-icon>
    </div>
  </div>
</template>

<script>
import { oneOf } from '../../../utils/assist';

export default {
  name: 'jun-alert',
  props: {
    type: {
      type: String,
      validator (value) {
        return oneOf(value, ['primary','success','info','warning','danger'])
      },
      default: 'primary'
    },
    border: {
      type: Boolean,
      default: false
    },
    leftBorder: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: true
    };
  },

  components: {},

  computed: {},

  methods: {
    clear: function(){
      this.isShow = false
    }
  }
}
</script>