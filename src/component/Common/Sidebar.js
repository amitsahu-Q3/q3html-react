import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
           <ul>
               <li>
                   <Link to={"/colors"}>Colors</Link>
               </li>
               <li>
                   <Link to={"/avatar"}>Avatar</Link>
               </li>
               <li>
                   <Link to={"/inline-alert"}>Inline Alert</Link>
               </li>
               <li>
                   <Link to={"/full-width-alert"}>Full Width Alert</Link>
               </li>
               <li>
                   <Link to={"/badge"}>Badge</Link>
               </li>
               <li>
                   <Link to={"/breadcrum"}>Breadcrum</Link>
               </li>
               <li>
                   <Link to={"/buttons"}>Buttons</Link>
               </li>
               <li>
                   <Link to={"/chips"}>Chips</Link>
               </li>
               <li>
                   <Link to={"/checkbox"}>Checkbox</Link>
               </li>
               <li>
                   <Link to={"/file-upload"}>File Upload</Link>
               </li>
               <li>
                   <Link to={"/input-field"}>Input Field</Link>
               </li>
               <li>
                   <Link to={"/pagination"}>Pagination</Link>
               </li>
               <li>
                   <Link to={"/textarea"}>Text Area</Link>
               </li>
               <li>
                   <Link to={"/toast"}>Toast</Link>
               </li>
               <li>
                   <Link to={"/table"}>Table</Link>
               </li>
               <li>
                   <Link to={"/tabbar"}>Tabbar</Link>
               </li>
               <li>
                   <Link to={"/switch"}>Switch</Link>
               </li>
               <li>
                   <Link to={"/radio"}>Radio</Link>
               </li>
               <li>
                   <Link to={"/loader"}>Loader</Link>
               </li>
               <li>
                   <Link to={"/accordion"}>Accordion</Link>
               </li>
               <li>
                   <Link to={"/progress-bar"}>Progress Bar</Link>
               </li>
               <li>
                   <Link to={"/stepper"}>Stepper</Link>
               </li>
               <li>
                   <Link to={"/date-picker"}>DatePicker</Link>
               </li>
           </ul>
        </>

    );
}

export default Sidebar;
