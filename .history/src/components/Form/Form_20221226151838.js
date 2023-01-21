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
import { Field, Form, Formik } from "formik";
import { AppButton } from "../AppButton/AppButton";
import './_form.scss';
// import { useState } from "react";
// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

export const EnquiryForm=() =>{
  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }
let [value, setValue] = React.useState("");

let handleInputChange = (e) => {
  let inputValue = e.target.value;
  setValue(inputValue);
};
  return (
    <Formik
      initialValues={{ name: "Sasuke" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <Input {...field} placeholder="name" />
                <Input type="email" placeholder="Email address" />
                <Input type="text" placeholder="Subject" />

                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          {/* <Text mb="8px">Value: {value}</Text> */}
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Enter your message"
            size="lg"
          />
          <div className="flexy">
            <div className="col-md-9">&nbsp;</div>
            <AppButton
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
              text="Submit"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}