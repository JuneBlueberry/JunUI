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
                v-for="i in pageList"
                :key="i"
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
        default: 58
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
        currentRow: 1,
        totalRow: 0,
      }
    },

    components: {},

    mounted: function(){
      this.updatePageTotal()
      this.getPageList()
    },

    methods: {
      changePage: function(i){
        if(this.data_pageCurrent != i){
          this.data_pageCurrent = i
        }
      },
      nextPage: function(){
        if(this.data_pageCurrent < this.data_pageTotal){
          if(this.data_pageCurrent % this.showMaxPage == 0){
            this.currentRow = this.currentRow + 1
          }
          this.data_pageCurrent = this.data_pageCurrent + 1
        }
      },
      lastPage: function(){
        if(this.data_pageCurrent > 1 ){
          if(this.data_pageCurrent % this.showMaxPage == 1){
            this.currentRow = this.currentRow - 1
          }
          this.data_pageCurrent = this.data_pageCurrent - 1
        }
      },
      getPageList: function(){
        this.pageList = []
        if(this.currentRow == this.totalRow){
          let counts = (this.data_pageTotal%this.showMaxPage==0)?this.showMaxPage:(this.data_pageTotal%this.showMaxPage)
          for(let i=1; i<=counts; i++){
            this.pageList.push((this.currentRow-1)*this.showMaxPage+i)
          }
        }else{
          for(let i=1; i<=this.showMaxPage; i++){
            this.pageList.push((this.currentRow-1)*this.showMaxPage+i)
          }
        }
      },

      updatePageTotal: function(){
        this.data_pageTotal = Math.ceil(this.data_total/this.data_pageSize)
        this.totalRow = Math.ceil(this.data_pageTotal/this.showMaxPage)
        if(this.currentRow > this.totalRow){
          this.currentRow = this.totalRow
        }
      }
    },

    watch: {
      data_pageCurrent: function(page){
        console.log(page)
        this.$emit('change', page)
      },
      data_total: function(){
        updatePageTotal()
      },
      currentRow: function(){
        this.getPageList()
      }
    }
  }
</script>