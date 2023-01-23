import React, {useState} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import SignatureCanvas from 'react-signature-canvas'

import './_form.scss';
import { StateSelect } from './Select/StateSelect';

export const EnquiryForm=() =>{
 
 return (
  
   <>
     <div className="form-section">
       <Form>
         <Form.Group className="mb-3 flexy" controlId="formBasicEmail">
         
           <div className="col-md-6">
            <Form.Control type="text"  />
           <small>First Name</small>
           </div>
           <br />
           <div className="col-md-6">
            <Form.Control type="text"  />
           <small>Last Name</small>
           </div>  
          </Form.Group>
         <h6 className="mt2">Company Name*</h6>
         <Form.Group className="mb-3 flexy" controlId="formBasicEmail">
           <Form.Control type="text"  />
          
         </Form.Group>
                  
                  
                  <h6 className="mt2">Company Address*</h6>

         <Form.Group className="mb-3 flexy" controlId="formBasicEmail">
           <Form.Control type="text"  />
          
         </Form.Group>
                           <small>Address Line 1</small>

         <Form.Group className="mb-3 flexy" controlId="formBasicEmail">
           <Form.Control type="text"  />
          
         </Form.Group>


         <Form.Group className="flexy">
          <Form.Group className="mb-3 col-md-8" controlId="formBasicEmail">
           <Form.Control type="text"  />
          
         </Form.Group>
      
          <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
           {/* <Form.Control type="text"  /> */}
                    <StateSelect />

         </Form.Group>
         <Form.Group className="mb-3 col-md-1" controlId="formBasicEmail">
           <Form.Control type="text"  />
         </Form.Group>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <h6>Affiliation with Wellspring College</h6>
           <Form.Control type="text"  />
          
         </Form.Group>
         <FloatingLabel
           controlId="floatingTextarea2"
           label="Please provide as many details of your request as possible:*
*"
         >
           <Form.Control
             as="textarea"
             style={{ height: "200px" }}
           />
           <small>Include specific products/services you want to present for consideration, possible distribution quantity, suggested schedule to provide products/services, costs, etc.
</small>
         </FloatingLabel><br />
         <h6>Signature*</h6>
  <div className="col-md-12 cardd">
            <SignatureCanvas penColor='grey' onEnd onBegin
    canvasProps={{width:1000, height: 200, className: 'sigCanvas'}} />
    <hr />
        </div>
        <small>Use your mouse or finger to draw your signature above
</small>
<button onClick="clear()">clear</button>
         <center><button variant="primary" type="submit">
           Submit Request
         </button></center>
       </Form>
     </div>
   </>
 );
  
}