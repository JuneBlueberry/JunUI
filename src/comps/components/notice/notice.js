import Vue from 'vue'
import Main from './notice.vue'

let NoticeConstructor = Vue.extend(Main)

let instance
let instances = []

const Notice = function (options) {
  instance = new NoticeConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
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
