import React from "react";
const TestPage = (props) => {
  const [heading, subheading, paragraph] = props;

  return<div>
    <h2>{heading}</h2>
    <h3>{subheading}</h3>
    {paragraph.map}
  </div>
};

export default TestPage;