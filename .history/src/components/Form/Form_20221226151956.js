import React, {useState} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Input,
  Textarea,
} from "@chakra-ui/react";
i
import './_form.scss';
// import { useState } from "react";
// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

export const EnquiryForm=() =>{
 return (
   <>
     <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" />
         <Form.Text className="text-muted">
           We'll never share your email with anyone else.
         </Form.Text>
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Check me out" />
       </Form.Group>
       <Button variant="primary" type="submit">
         Submit
       </Button>
     </Form>
   </>
 );
  
}