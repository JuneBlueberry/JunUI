import './styles/index.scss'

import { Button } from './components/button/index'
import { FlexRow, FlexCol } from './components/flex/index'

const components = {
  Button,
  FlexRow,
  FlexCol
}

const install = function (Vue) {
  if (install.installed) {
    return
  }
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
