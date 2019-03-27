<!-- JunChen 2019-03-20 Tag组件 -->
<template>
  <div v-if="isShow" class="jun-tag-div">
    <div :class="['tag-warpper', 'tag-type-'+type, {'is-border': border, 'is-closable': closable}]">
      <span 
        class="tag-msg">
        <slot></slot>
      </span>
      <span 
        v-if="closable" 
        :class="['tag-close', 'tag-type-'+type, {'is-border': border}]"
        @click="handleClose">
        <jun-icon type="icon-close" :size="16"></jun-icon>
      </span>
    </div>
  </div>
</template>

<script>
import { oneOf } from '../../../utils/assist';

export default {
  name: 'jun-tag',
  props: {
    type: {
      type: String,
      validator (value) {
        return oneOf(value, ['default','primary','success','info','warning','danger'])
      },
      default: 'default'
    },
    border: {
      type: Boolean
    },
    closable: {
      type: Boolean
    }
  },
  data () {
    return {
      isShow: true
    };
  },

  components: {},

  computed: {

  },

  methods: {
    handleClose: function(){
      this.isShow = false
    }
  }
}
</script>