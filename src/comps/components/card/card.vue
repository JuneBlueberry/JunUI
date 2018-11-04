<!-- By Abner 2018-11-04 Card组件 -->
<template>
  <div class="jun-card-div">
      <div :class="['card-main', 'card-type-'+type]">
        <slot></slot>
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
            return oneOf(value, ['default', 'highlight', 'zoom'])
        },
        default: 'default'
      }
    },
    data () {
      return {}
    },

    components: {},

    computed: {},

    methods: {}
  }
</script>