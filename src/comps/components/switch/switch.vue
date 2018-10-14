<!-- By Abner 2018-10-14 开关组件 -->
<template>
    <div :class="['jun-switch', 'jun-switch-'+type]">
      <input 
        :class="[{'isChecked': isChecked}]" 
        type="checkbox" 
        :id="randomId" 
        :checked="isChecked" 
        value="0"
        @change="change">
      <label :for="randomId"></label>
    </div>
</template>

<script>
export default {
  name: "jun-switch",
  props: {
    type: {
      type: Number,
      default: 1
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChecked: this.checked,
      randomId: 0
    };
  },

  mounted: function(){
    var randomNum=Math.floor(Math.random()*10000+1);
    this.randomId = 'jun-switch-' + randomNum
  },

  components: {},

  computed: {},

  methods: {
    change: function(event){
      this.isChecked = event.target.checked
      this.$emit('change', this.isChecked)
    }
  }
};
</script>