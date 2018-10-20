<template>
  <div>
    <!-- <div>  
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
    </div> -->
    <!-- <div>
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
        <jun-flex-row class="mar-row-top" :gutter="32">
          <jun-flex-col :span="12"><div class="col-light">50%</div></jun-flex-col>
          <jun-flex-col :span="12"><div class="col-dark">50%</div></jun-flex-col>
        </jun-flex-row>
        <jun-flex-row class="mar-row-top" :gutter="16">
          <jun-flex-col :span="6"><div class="col-light">25%</div></jun-flex-col>
          <jun-flex-col :span="6"><div class="col-dark">25%</div></jun-flex-col>
          <jun-flex-col :span="6"><div class="col-light">25%</div></jun-flex-col>
          <jun-flex-col :span="6"><div class="col-dark">25%</div></jun-flex-col>
        </jun-flex-row>
        <jun-flex-row class="mar-row-top" :gutter="32">
          <jun-flex-col :span="8"><div class="col-light">8/24</div></jun-flex-col>
          <jun-flex-col :span="6"><div class="col-dark">6/24</div></jun-flex-col>
          <jun-flex-col :span="4"><div class="col-light">4/24</div></jun-flex-col>
          <jun-flex-col :span="4"><div class="col-dark">4/24</div></jun-flex-col>
          <jun-flex-col :span="2"><div class="col-light">2/24</div></jun-flex-col>
        </jun-flex-row>
      </div>
    </div> -->
    <!-- <div style="width: 70%">
      <jun-input class="mar-row-top" v-model="selectVal" prepend append @on-prepend="prependClick">
        <template slot="prepend">
          <i>帐号</i>
        </template>
        <template slot="append">搜索</template>
      </jun-input>
      <jun-input class="mar-row-top" clearable></jun-input>
      <jun-flex-row class="mar-row-top" :gutter="30">
        <jun-flex-col>
          <jun-input size="big"></jun-input>
        </jun-flex-col>
        <jun-flex-col>
          <jun-input size="default" iappend clearable></jun-input>
        </jun-flex-col>
        <jun-flex-col>
          <jun-input size="default" prepend>
            <template slot="prepend">
              <jun-icon type="icon-addpeople_fill" :size="24"></jun-icon>
            </template>
          </jun-input>
        </jun-flex-col>
        <jun-flex-col>
          <jun-input size="mini"></jun-input>
        </jun-flex-col>
      </jun-flex-row>
      <jun-input class="mar-row-top" placeholder="haha" @change="changeVal" disabled></jun-input>
    </div> -->
    <!-- <div>
      <div>
        <jun-icon type="icon-accessory"></jun-icon>
        <jun-icon type="icon-activity"></jun-icon>
        <jun-icon type="icon-activity_fill"></jun-icon>
        <jun-icon type="icon-add"></jun-icon>
        <jun-icon type="icon-addition_fill"></jun-icon>
        <jun-icon type="icon-addition"></jun-icon>
        <jun-icon type="icon-addpeople_fill"></jun-icon>
      </div>
      <div>
        <jun-icon type="icon-addpeople" size="48px"></jun-icon>
        <jun-icon type="icon-addressbook_fill" size="44px"></jun-icon>
        <jun-icon type="icon-addressbook" size="40px"></jun-icon>
        <jun-icon type="icon-barrage_fill" size="36px"></jun-icon>
        <jun-icon type="icon-barrage" size="32px"></jun-icon>
        <jun-icon type="icon-browse_fill" size="28px"></jun-icon>
        <jun-icon type="icon-browse" size="24px"></jun-icon>
      </div>
      <div>
        <jun-icon type="icon-accessory" color="#333333"></jun-icon>
        <jun-icon type="icon-activity" color="#444444"></jun-icon>
        <jun-icon type="icon-activity_fill" color="#555555"></jun-icon>
        <jun-icon type="icon-add" color="#666666"></jun-icon>
        <jun-icon type="icon-addition_fill" color="#777777"></jun-icon>
        <jun-icon type="icon-addition" color="#888888"></jun-icon>
        <jun-icon type="icon-addpeople_fill" color="#999999"></jun-icon>
      </div>
    </div> -->
    <!-- <div>
      <jun-radio size="small">前端工程师</jun-radio>
      <jun-radio>后端工程师</jun-radio>
      <jun-radio disabled>算法工程师</jun-radio>
      <jun-radio color="red">算法工程师</jun-radio>
      <jun-radio color="green">算法工程师</jun-radio>
      <jun-radio color="yellow">算法工程师</jun-radio>
      <jun-radio size="big">全栈工程师</jun-radio>
    </div> -->
    <!-- <div>
      <jun-radio-group v-model="selectVal">
        <jun-radio label="前端工程师">前端工程师</jun-radio>
        <jun-radio label="后端工程师">后端工程师</jun-radio>
        <jun-radio label="全栈工程师">全栈工程师</jun-radio>
      </jun-radio-group>
      <jun-radio >全栈工程师</jun-radio>
    </div>
    <div>
      <jun-checkbox v-model="selectVal2">前端工程师</jun-checkbox>
      <jun-checkbox-group v-model="selectVal3">
        <jun-checkbox label="前端工程师" color="green"></jun-checkbox>
        <jun-checkbox label="后端工程师" color="red"></jun-checkbox>
        <jun-checkbox label="全栈工程师" color="yellow"></jun-checkbox>
      </jun-checkbox-group>
    </div> -->
    <!-- <div>
      <jun-switch></jun-switch>
      <jun-switch checked></jun-switch>
      <br/><br/>
      <jun-switch :type="2"></jun-switch>
      <jun-switch :type="2" checked></jun-switch>
      <br/><br/>
      <jun-switch :type="3"></jun-switch>
      <jun-switch :type="3" checked></jun-switch>
    </div> -->
    <!-- <div>
      <jun-select></jun-select>
    </div> -->
    <div>
      <jun-alert class="mar-row-top" leftBorder clearable>asdasdasd</jun-alert>
      <jun-alert class="mar-row-top" type="success" leftBorder>asdasdasd</jun-alert>
      <jun-alert class="mar-row-top" type="info" border leftBorder>asdasdasd</jun-alert>
      <jun-alert class="mar-row-top" type="warning" border leftBorder>
        <p>1121212</p>
        <p>asdasdasdasdasdas</p>
        <p>千万人空间哦通过豆腐干士大夫</p>
      </jun-alert>
      <jun-alert class="mar-row-top" type="danger" leftBorder>asdasdasd</jun-alert>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      selectVal: '111',
      selectVal2: true,
      selectVal3: ['前端工程师']
    }
  },
  methods: {
    clickPrimary: function(event){
      console.log(event)
    },
    changeVal: function(val){
      console.log(val)
    },
    prependClick: function(val){
      console.log(val)
    }
  },
  watch: {
    selectVal: function(val){
      console.log(val)
    },
    selectVal2: function(val){
      console.log(val)
    },
    selectVal3: function(val){
      console.log(val)
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
