import './styles/index.scss'

import { Alert } from './components/alert/index'
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb/index'
import { Button } from './components/button/index'
import { Card } from './components/card/index'
import { CheckBoxGroup, CheckBox } from './components/checkbox/index'
import { Collapse, CollapseItem } from './components/collapse/index'
import { DatePicker } from './components/datepicker/index'
import { Dialog, $Dialog } from './components/dialog/index'
import { FlexRow, FlexCol } from './components/flex/index'
import { Input } from './components/input/index'
import { InputNumber } from './components/inputnumber/index'
import { Icon } from './components/icon/index'
import { Menu } from './components/menu/index'
import { $Message } from './components/message/index'
import { Loading, $Loading } from './components/loading/index'
import { LoadingBar } from './components/loadingbar/index'
import { Notice, $Notice} from './components/notice/index'
import { Page } from './components/page/index'
import { Progress } from './components/progress/index'
import { RadioGroup, Radio } from './components/radio/index'
import { Rate } from './components/rate/index'
import { Select } from './components/select/index'
import { Sidebar } from './components/sidebar/index'
import { Steps } from './components/steps/index'
import { Switch } from './components/switch/index'
import { Table } from './components/table/index'
import { Tag } from './components/tag/index'
import { Tabs, TabsItem } from './components/tabs/index'
import { TimePicker } from './components/timepicker/index'
import { Tooltip } from './components/tooltip/index'
import { Transfer } from './components/transfer/index'

const components = {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CheckBoxGroup,
  CheckBox,
  Collapse,
  CollapseItem,
  DatePicker,
  Dialog,
  FlexRow,
  FlexCol,
  Input,
  InputNumber,
  Icon,
  Menu,
  Loading,
  LoadingBar,
  Notice,
  Page,
  Progress,
  RadioGroup,
  Radio,
  Rate,
  Select,
  Sidebar,
  Steps,
  Switch,
  Table,
  Tabs,
  TabsItem,
  Tag,
  TimePicker,
  Tooltip,
  Transfer
}

const install = function (Vue) {
  if (install.installed) {
    return
  }
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })

  Vue.prototype.$dialog = $Dialog
  Vue.prototype.$message = $Message
  Vue.prototype.$loading = $Loading
  Vue.prototype.$notice = $Notice
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
