import React, {useState} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import './_form.scss';

export const EnquiryForm=() =>{
 return (
   <>
     <div className="form-section">
       <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         
           <Form.Control type="text" placeholder="* Name" /><br />
           <Form.Control type="email" placeholder="* Email" />
           
         </Form.Group>

         
         </Form.Group>
         <Button variant="primary" type="submit">
           Submit
         </Button>
       </Form>
     </div>
   </>
 );
  
}