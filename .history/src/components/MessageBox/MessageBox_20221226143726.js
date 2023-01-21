import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import React, { useState } from "react";

import "./_message-box.scss";
export const MessageBox = () =>{
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const [show, setShow] = useState(false);
 return (
   <>
     <div className="mb-2">
       {[""].map((direction) => (
         <DropdownButton
           as={ButtonGroup}
           key={direction}
           id={`dropdown-button-drop-${direction}`}
           drop={direction}
           variant="secondary"
           title={"Leave Us a Message"}
           closeButton
         >
           <div className="message-head">
            <
           </div>
         </DropdownButton>
       ))}
     </div>
   </>
 );


}
