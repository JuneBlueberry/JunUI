import Vue from 'vue'
import Main from './dialog.vue'

let DialogConstructor = Vue.extend(Main)

let instance
let instances = []

const Dialog = function (options) {
  instance = new DialogConstructor({
    
  })
  Object.assign(instance, options)
  instance.vm = instance.$mount()
  instance.visible = true
  document.body.appendChild(instance.vm.$el)
  if (instance.vm.onShow != null && instance != undefined) {
    instance.vm.onShow()
  }
  instances.push(instance)
}

Dialog.close = function () {
  instances.forEach(function(item, index){
    if(item.vm.onClose != null && instance != undefined){
      instance.vm.onClose()
    }
    item.$el.parentNode.removeChild(item.$el)
  })
  instances = []
}

export default Dialog
