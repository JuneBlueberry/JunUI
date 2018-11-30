import './styles/index.scss'

import { Alert } from './components/alert/index'
import { Button } from './components/button/index'
import { Card } from './components/card/index'
import { CheckBoxGroup, CheckBox } from './components/checkbox/index'
import { DatePicker } from './components/datepicker/index'
import { Dialog } from './components/dialog/index'
import { FlexRow, FlexCol } from './components/flex/index'
import { Input } from './components/input/index'
import { Icon } from './components/icon/index'
import { Menu } from './components/menu/index'
import { Message } from './components/message/index'
import { LoadingBar } from './components/loadingbar/index'
import { Page } from './components/page/index'
import { Progress } from './components/progress/index'
import { RadioGroup, Radio } from './components/radio/index'
import { Rate } from './components/rate/index'
import { Select } from './components/select/index'
import { Sidebar } from './components/sidebar/index'
import { Switch } from './components/switch/index'
import { Table } from './components/table/index'
import { Tabs, TabsItem } from './components/tabs/index'

const components = {
  Alert,
  Button,
  Card,
  CheckBoxGroup,
  CheckBox,
  DatePicker,
  Dialog,
  FlexRow,
  FlexCol,
  Input,
  Icon,
  Menu,
  LoadingBar,
  Page,
  Progress,
  RadioGroup,
  Radio,
  Rate,
  Select,
  Sidebar,
  Switch,
  Table,
  Tabs,
  TabsItem
}

const install = function (Vue) {
  if (install.installed) {
    return
  }
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })

  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
