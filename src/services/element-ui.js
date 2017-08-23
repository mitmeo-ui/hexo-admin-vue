import {
  Loading,
  MessageBox,
  Message,
  Notification,
  Button,
  Col,
  Row,
  Input,
} from 'element-ui';

import en from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

export default {
  install(Vue) {
    locale.use(en);
    Vue.use(Loading);

    // Core components should be imported by default
    Vue.component(Button.name, Button);
    Vue.component(Col.name, Col);
    Vue.component(Row.name, Row);
    Vue.component(Input.name, Input);

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;
  },
};
