<!-- JunChen 2019-06-18 步骤条组件Steps -->
<template>
  <div class="jun-step-div">
    <div class="step-item">
      <span class="step-num">{{ index }}</span>
      <span class="step-title">{{ title }}</span>
      <span class="step-describe">{{ describe }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jun-step',
  props: {
    title: {
      type: String,
      default: ''
    },
    describe: {
      type: String,
      default: 'hahahahahahahaha'
    }
  },
  data () {
    return {
      index: 1
    };
  },

  components: {},

  computed: {},

  methods: {}
}
</script>