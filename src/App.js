import './App.scss';
import './Common.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Colors from './color.js';
import InlineAlert from './component/Alerts/InlineAlerts.js';
import FullWidthAlert from './component/Alerts/FullwidthAlerts.js';
import Avatar from './component/Avatar/Avatar.js';
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
import ProgressBar from './component/ProgressBar/ProgressBar.js';
import Sidebar from './component/Common/Sidebar.js';


function App() {
  return (
   <>
      

     <BrowserRouter>
    <div className="App">
    <div className='container-full'>
         <div className='left-menu'>
             <Sidebar></Sidebar>
         </div>
         <div className='page-view'>
         <Routes>
            <Route exact path="/colors" element={<Colors/>} />
            <Route exact path="/avatar" element={<Avatar/>} />
            <Route exact path="/inline-alert" element={ <InlineAlert/>} />
            <Route exact path="/full-width-alert" element={ <FullWidthAlert/>} />
            <Route exact path="/badge" element={ <Badge/>} />
            <Route exact path="/breadcrum" element={<Breadcrum/>} />
            <Route exact path="/buttons" element={ <Buttons/>} />
            <Route exact path="/chips" element={<Chips/>} />
            <Route exact path="/checkbox" element={ <Checkbox/>} />
            <Route exact path="/file-upload" element={ <FileUpload/>} />
            <Route exact path="/input-field" element={ <InputField/>} />
            <Route exact path="/pagination" element={ <Pagination/>} />
            <Route exact path="/textarea" element={<TextArea/>} />
            <Route exact path="/toast" element={ <Toast/>} />
            <Route exact path="/table" element={ <Table/>} />
            <Route exact path="/tabbar" element={ <Tabbar/>} />
            <Route exact path="/switch" element={  <Switch/>} />
            <Route exact path="/radio" element={ <Radio/>} />
            <Route exact path="/loader" element={  <Loader/>} />
            <Route exact path="/accordion" element={  <Accordion/> } />
            <Route exact path="/progress-bar" element={<ProgressBar/>}/>
        </Routes>
         </div>
    </div>
      
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
