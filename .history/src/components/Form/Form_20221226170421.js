import React, {useState} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import './_form.scss';

export const EnquiryForm=() =>{
 return (
   <>
     <div className="form-section">
       <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control type="text" placeholder="* Name" />
           <br />
           <Form.Control type="email" placeholder="* Email" />
         </Form.Group>

         <FloatingLabel
           controlId="floatingTextarea2"
           label="* Message for Admissions

"
         >
           <Form.Control
             as="textarea"
             placeholder="Leave a comment here"
             style={{ height: "100px" }}
           />
         </FloatingLabel>

         <Button variant="primary" type="submit">
           Submit
         </Button>
       </Form>
     </div>
   </>
 );
  
}