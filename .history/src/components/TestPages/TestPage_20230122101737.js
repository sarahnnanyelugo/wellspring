import React from "react";
const TestPage = (props) => {
  const [heading, subheading, paragraph] = props;

  return<div>
    <h2>{heading}</h2>
  </div>
};

export default TestPage;
