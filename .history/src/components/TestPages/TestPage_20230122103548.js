import React from "react";
const TestPage = (props) => {
//   const [heading, subheading, paragraph] = props;
console.log("")
  return<div>
    <h2>{props.heading}</h2>
    <h3>{props.subheading}</h3>
  </div>
};

export default TestPage;
