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
    </div>
    <div>
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
    </div>
    <div style="width: 70%">
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
    </div>
    <div>
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
    </div>
    <div>
      <jun-radio size="small">前端工程师</jun-radio>
      <jun-radio>后端工程师</jun-radio>
      <jun-radio disabled>算法工程师</jun-radio>
      <jun-radio color="red">算法工程师</jun-radio>
      <jun-radio color="green">算法工程师</jun-radio>
      <jun-radio color="yellow">算法工程师</jun-radio>
      <jun-radio size="big">全栈工程师</jun-radio>
    </div>
    <div>
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
    </div>
    <div>
      <jun-switch></jun-switch>
      <jun-switch checked></jun-switch>
      <br/><br/>
      <jun-switch :type="2"></jun-switch>
      <jun-switch :type="2" checked></jun-switch>
      <br/><br/>
      <jun-switch :type="3"></jun-switch>
      <jun-switch :type="3" checked></jun-switch>
    </div>
    <div>
      <jun-select></jun-select>
    </div>
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
    <div>
      <jun-rate v-model="selectVal4"></jun-rate>
      <jun-rate icon="icon-collection"></jun-rate>
      <jun-rate icon="icon-emoji_fill" clearable></jun-rate>
      <jun-rate icon="icon-delete_fill"></jun-rate>
      <jun-rate icon="icon-delete_fill" style-color-default="#333333" style-color-active="red"></jun-rate>
      <jun-rate icon="icon-collection" :counts="8"></jun-rate>
    </div>
    <div>
      <jun-datepicker v-model="selectVal5"></jun-datepicker>
    </div> -->
    <!-- <div>
      <jun-page></jun-page>
    </div> -->
    <!-- <div>
      <jun-tabs v-model="selectVal6" @change="changeVal">
        <jun-tabs-item name="tab1" label="便签1">11111</jun-tabs-item>
        <jun-tabs-item name="tab2" label="便签2">22222</jun-tabs-item>
        <jun-tabs-item name="tab3" label="便签3">33333</jun-tabs-item>
      </jun-tabs>
    </div>
    <div>
      <jun-tabs v-model="selectVal6" @change="changeVal">
        <template slot="tabs-rigth-div">
          <jun-button type="success" style="float:right" @click="addTab">添加</jun-button>
        </template>
        <jun-tabs-item v-for="(item,index) in selectVal7" :name="item.name" :label="item.label" :key="index">111</jun-tabs-item>
      </jun-tabs>
    </div> -->
    <!-- <div>
      <jun-card style="width:60%;margin: 20px auto">
        <p>111</p>
        <p>222</p>
      </jun-card>
      <jun-card style="width:60%;margin: 20px auto" type='highlight'>
        <p>111</p>
        <p>222</p>
      </jun-card>
      <jun-card style="width:60%;margin: 20px auto" type='zoom'>卡片1</jun-card>
    </div> -->
    <div style="width: 90%; margin: 0 auto;">
      <jun-table border :height="250">
        <span slot='mob' slot-scope="item">{{item.row.mob.substring(0,3) + '****' + item.row.mob.substring(7,4)}}</span>
        <span slot="caozuo" slot-scope="item">
          <jun-button size="small" type="primary">增加</jun-button>
        </span>
      </jun-table>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      selectVal: '111',
      selectVal2: true,
      selectVal3: ['前端工程师'],
      selectVal4: 2,
      selectVal5: '',
      selectVal6: 'tab2',
      selectVal7: [
        {name:'tab1', label: '便签1'},
        {name:'tab2', label: '便签2'},
        {name:'tab3', label: '便签3'}
      ]
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
    },
    selectItem: function(){
      console.log(222)
    },
    addTab: function(){
       this.selectVal7.push({name:'tab', label: '便签'})
    },
    selectItem2: function(value){
      console.log(value)
    },
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
    },
    selectVal4: function(val){
      console.log(val)
    },
    selectVal5: function(val){
      console.log(val)
    },
    selectVal6: function(val){
      console.log(val)
    },
    selectVal7: function(val){
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
