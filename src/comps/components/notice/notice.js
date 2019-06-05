import Vue from 'vue'
import Main from './notice.vue'
import { findComponentUpward } from '../../../utils/assist'

let NoticeConstructor = Vue.extend(Main)

let instance
let instances = []

const Notice = function (options) {
  instance = new NoticeConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  //判断是否已经有一个提醒框
  let warpperDomHave = document.getElementById("jun-notice-divs")
  if(warpperDomHave != undefined || warpperDomHave != null){
    warpperDomHave.appendChild(instance.vm.$el)
  } else {
    let warpperDomH = document.createElement("div")
    warpperDomH.id = "jun-notice-divs"
    document.body.appendChild(warpperDomH).appendChild(instance.vm.$el)
  }
  instance.vm.visible = true
  if (instance.vm.onShow != null) {
    instance.vm.onShow()
  }
  instances.push(instance)
}

Notice.close = function () {
  instances.splice(0, 1)
}

export default Notice
