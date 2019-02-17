import Vue from 'vue'
import Main from './loading.vue'

let LoadingConstructor = Vue.extend(Main)

let instance
let instances = []

const Loading = function (options) {
  instance = new LoadingConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.isPlugin = true
  instance.vm.visible = true
  if (instance.vm.onShow != null && instance != undefined) {
    instance.vm.onShow()
  }
  instances.push(instance)
}

Loading.close = function () {
  instances.forEach(function(item, index){
    if(item.vm.onClose != null && instance != undefined){
      instance.vm.onClose()
    }
    item.$el.parentNode.removeChild(item.$el)
  })
  instances = []
}

export default Loading
