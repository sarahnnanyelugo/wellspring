import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import "./_message-box.scss";
export const MessageBox = () =>{

 return (
   <>
     <div className="mb-2">
       {[ ""].map(
         (direction) => (
           <DropdownButton
             as={ButtonGroup}
             key={direction}
             id={`dropdown-button-drop-${direction}`}
             drop={direction}
             variant="secondary"
             title={` `}
           >
             <Dropdown.Item eventKey="1">Action</Dropdown.Item>
             <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
             <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
             <Dropdown.Divider />
             <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
           </DropdownButton>
         )
       )}
     </div>

    
   </>
 );


}