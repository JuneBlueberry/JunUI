import Vue from 'vue'
import Main from './message.vue'

let MessageConstructor = Vue.extend(Main)

let instance
let instances = []

const Message = function (options) {
  instance = new MessageConstructor({
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

Message.close = function () {
  instances.splice(0, 1)
}

export default Message
