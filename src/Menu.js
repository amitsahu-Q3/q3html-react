import { BrowserRouter, Routes, Route } from "react-router-dom";

import Colors from './color.js';
import Avatar from './component/Avatar/Avatar.js';
import InlineAlert from './component/Alerts/InlineAlerts.js';
import FullWidthAlert from './component/Alerts/FullwidthAlerts.js';
import Badge from './component/Badge/Badge.js';
import Breadcrum from './component/Breadcrum/Breadcrum.js';
import Buttons from './component/Buttons/Buttons.js';
import Chips from './component/Chips/Chips.js';
import Checkbox from './component/Checkbox/checkbox.js';
import FileUpload from './component/FileUpload/FileUpload.js';
import InputField from './component/InputField/InputField.js';
import Pagination from './component/Pagination/pagination.js';
import TextArea from './component/TextArea/textarea.js';
import Toast from './component/Toast/Toast.js';
import Table from './component/Table/Table.js';
import Tabbar from './component/Tabbar/Tabbar.js';
import Switch from './component/Switch/Switch.js';
import Radio from './component/Radio/Radio.js';
import Loader from './component/Loader/Loader.js';
import Accordion from './component/Accordion/Accordion.js';
import Header from "./component/Common/Sidebar.js";


const Menu = (
  <BrowserRouter>
  <Header></Header>
  <Routes>
      <Route exact path="/color" component={Colors} />
      <Route exact path="/avatar" component={Avatar} />
      <Route exact path="/inline-alert" component={InlineAlert} />
      <Route exact path="/full-width-alert" component={FullWidthAlert} />
      <Route exact path="/badge" component={Badge} />
      <Route exact path="/breadcrum" component={Breadcrum} />
      <Route exact path="/buttons" component={Buttons} />
      <Route exact path="/chips" component={Chips} />
      <Route exact path="/checkbox" component={Checkbox} />
      <Route exact path="/file-upload" component={FileUpload} />
      <Route exact path="/input-field" component={InputField} />
      <Route exact path="/pagination" component={Pagination} />
      <Route exact path="/textarea" component={TextArea} />
      <Route exact path="/toast" component={Toast} />
      <Route exact path="/table" component={Table} />
      <Route exact path="/tabbar" component={Tabbar} />
      <Route exact path="/switch" component={Switch} />
      <Route exact path="/radio" component={Radio} />
      <Route exact path="/loader" component={Loader} />
      <Route exact path="/accordion" component={Accordion} />
  </Routes>
  </BrowserRouter>
)

export default Menu;