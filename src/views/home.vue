<template>
  <div>
    <div class="mar-top">
      <jun-button>默认按钮</jun-button>
      <jun-button type="primary" @click="clickPrimary">常用按钮</jun-button>
      <jun-button type="success">成功按钮</jun-button>
      <jun-button type="info">信息按钮</jun-button>
      <jun-button type="warning">警告按钮</jun-button>
      <jun-button type="error">危险按钮</jun-button>
    </div>
    <div class="mar-top">
      <jun-button round>默认按钮</jun-button>
      <jun-button type="primary" round>常用按钮</jun-button>
      <jun-button type="success" round>成功按钮</jun-button>
      <jun-button type="info" round>信息按钮</jun-button>
      <jun-button type="warning" round>警告按钮</jun-button>
      <jun-button type="error" round>危险按钮</jun-button>
    </div>
    <div class="mar-top">
      <jun-button disabled>默认按钮</jun-button>
      <jun-button type="primary" disabled>常用按钮</jun-button>
      <jun-button type="success" disabled>成功按钮</jun-button>
      <jun-button type="info" disabled>信息按钮</jun-button>
      <jun-button type="warning" disabled>警告按钮</jun-button>
      <jun-button type="error" disabled>危险按钮</jun-button>
    </div>
    <div class="mar-top">
      <jun-button plain>默认按钮</jun-button>
      <jun-button type="primary" plain>常用按钮</jun-button>
      <jun-button type="success" plain>成功按钮</jun-button>
      <jun-button type="info" plain>信息按钮</jun-button>
      <jun-button type="warning" plain>警告按钮</jun-button>
      <jun-button type="error" plain>危险按钮</jun-button>
    </div>
    <div class="mar-top">
      <jun-button size="big">默认按钮</jun-button>
      <jun-button type="primary" size="medium">常用按钮</jun-button>
      <jun-button type="success">成功按钮</jun-button>
      <jun-button type="info" size="small">信息按钮</jun-button>
      <jun-button type="warning" size="mini">警告按钮</jun-button>
      <jun-button type="error" size="mini">危险按钮</jun-button>
    </div>
    <div class="mar-top">
      <jun-flex-row class="mar-row-top">
        <jun-flex-col :span="24"><div class="col-light">100%</div></jun-flex-col>
      </jun-flex-row>
      <jun-flex-row class="mar-row-top">
        <jun-flex-col :span="12"><div class="col-light">50%</div></jun-flex-col>
        <jun-flex-col :span="12"><div class="col-dark">50%</div></jun-flex-col>
      </jun-flex-row>
      <jun-flex-row class="mar-row-top">
        <jun-flex-col :span="6"><div class="col-light">25%</div></jun-flex-col>
        <jun-flex-col :span="6"><div class="col-dark">25%</div></jun-flex-col>
        <jun-flex-col :span="6"><div class="col-light">25%</div></jun-flex-col>
        <jun-flex-col :span="6"><div class="col-dark">25%</div></jun-flex-col>
      </jun-flex-row>
      <jun-flex-row class="mar-row-top">
        <jun-flex-col :span="8"><div class="col-light">8/24</div></jun-flex-col>
        <jun-flex-col :span="6"><div class="col-dark">6/24</div></jun-flex-col>
        <jun-flex-col :span="4"><div class="col-light">4/24</div></jun-flex-col>
        <jun-flex-col :span="4"><div class="col-dark">4/24</div></jun-flex-col>
        <jun-flex-col :span="2"><div class="col-light">2/24</div></jun-flex-col>
      </jun-flex-row>
    </div>

    <div class="mar-top">
      <jun-flex-row class="mar-row-top">
        <jun-flex-col :span="24"><div class="col-light">100%</div></jun-flex-col>
      </jun-flex-row>
      <jun-flex-row class="mar-row-top">
        <jun-flex-col :span="12"><div class="col-light">50%</div></jun-flex-col>
        <jun-flex-col :span="12"><div class="col-dark">50%</div></jun-flex-col>
      </jun-flex-row>
      <jun-flex-row class="mar-row-top">
        <jun-flex-col :span="6"><div class="col-light">25%</div></jun-flex-col>
        <jun-flex-col :span="6"><div class="col-dark">25%</div></jun-flex-col>
        <jun-flex-col :span="6"><div class="col-light">25%</div></jun-flex-col>
        <jun-flex-col :span="6"><div class="col-dark">25%</div></jun-flex-col>
      </jun-flex-row>
      <jun-flex-row class="mar-row-top">
        <jun-flex-col :span="8"><div class="col-light">8/24</div></jun-flex-col>
        <jun-flex-col :span="6"><div class="col-dark">6/24</div></jun-flex-col>
        <jun-flex-col :span="4"><div class="col-light">4/24</div></jun-flex-col>
        <jun-flex-col :span="4"><div class="col-dark">4/24</div></jun-flex-col>
        <jun-flex-col :span="2"><div class="col-light">2/24</div></jun-flex-col>
      </jun-flex-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickPrimary: function(event){
      console.log(event)
    }
  }
}
</script>

<style scoped>
  .mar-top{margin-top: 20px;}
  .mar-row-top{margin-top: 10px;}
  .col-light{background-color: #cccccc;padding: 6px 0}
  .col-dark{background-color: #999999;padding: 6px 0}
</style>
