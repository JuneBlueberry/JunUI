import './styles/index.scss'

import { Alert } from './components/alert/index'
import { Button } from './components/button/index'
import { CheckBoxGroup,CheckBox } from './components/checkbox/index'
import { DatePicker } from './components/datepicker/index'
import { FlexRow, FlexCol } from './components/flex/index'
import { Input } from './components/input/index'
import { Icon } from './components/icon/index'
import { RadioGroup, Radio } from './components/radio/index'
import { Rate } from './components/rate/index'
import { Switch } from './components/switch/index'
import { Select } from './components/select/index'

const components = {
  Alert,
  Button,
  CheckBoxGroup,
  CheckBox,
  DatePicker,
  FlexRow,
  FlexCol,
  Input,
  Icon,
  RadioGroup,
  Radio,
  Rate,
  Switch,
  Select
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
