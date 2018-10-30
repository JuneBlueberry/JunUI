<!-- By Abner 2018-10-28 分页Page组件 -->
<template>
  <div class="jun-page-div">
      <div class="page-left-warpper"></div>
      <div class="page-mian-warpper">
          <ul>
              <li><span><jun-icon type='icon-doubleleft' :size='14'></jun-icon></span></li>
              <li
                @click="lastPage"><span><jun-icon type='icon-return' :size='14'></jun-icon></span></li>
              <li 
                v-for="(i, index) in pageList"
                @click="changePage(i)">
                <span :class="i==data_pageCurrent?'page-active':''">{{i}}</span>
              </li>
              <li
                @click="nextPage"><span><jun-icon type='icon-enter' :size='14'></jun-icon></span></li>
              <li><span><jun-icon type='icon-doubleright' :size='14'></jun-icon></span></li>
          </ul>
      </div>
      <div class="page-right-warpper"></div>
  </div>
</template>

<script>

  export default {
    name: 'jun-page',
    props: {
      total: {
        type: Number,
        default: 100
      },
      pageCurrent: {
        type: Number,
        default: 1,
      },
      pageSize: {
        type: Number,
        default: 5
      },
      showMaxPage: {
        type: Number,
        validator (value) {
          return value < 5 ? false : value > 21 ? false : true
        },
        default: 5
      }
    },
    data () {
      return {
        data_total: this.total,
        data_pageSize: this.pageSize,
        data_pageTotal: 0,
        data_pageCurrent: this.pageCurrent,
        
        pageList: [],
        startPage: 1,
        endPage: 0

      }
    },

    components: {},

    mounted: function(){
      this.updatePageTotal()
      this.getPageList()
    },

    methods: {
      changePage: function(i){
          this.data_pageCurrent = i
      },
      nextPage: function(){
        if(this.data_pageCurrent < this.data_pageTotal){
          this.data_pageCurrent = this.data_pageCurrent + 1
          if(this.showMaxPage + this.startPage <= this.data_pageCurrent){
            this.startPage = this.data_pageCurrent
          }
        }
      },
      lastPage: function(){
        if(this.data_pageCurrent > 1 ){
          this.data_pageCurrent = this.data_pageCurrent - 1
        }
      },
      getPageList: function(){
        this.pageList = []
        if(this.showMaxPage >= this.data_pageTotal){
          for(let i=1; i<=this.data_pageTotal; i++){
            this.pageList.push(i)
          }
        }else{
          for(let i=this.startPage; i<=this.startPage+this.showMaxPage; i++){
            this.pageList.push(i)
          }
        }
      },

      updatePageTotal: function(){
        this.data_pageTotal = (this.data_total%this.pageSize==0) ? (this.data_total/this.pageSize) : (this.data_total/this.pageSize)+1
      }
    },

    watch: {
      data_total: function(){
        console.log(111)
      },
      startPage: function(){
        this.getPageList()
      }
    }
  }
</script>