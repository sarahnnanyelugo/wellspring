import React, { useState } from "react";
import "./_faq-accordion.scss";
import Accordion from "react-bootstrap/Accordion";
// import ACSI from "../../assets/acsi.png";
// import Cross from "../../assets/cross.svg";
// import Blue from "../../assets/blue.png";
// import BrandGuide from "../../assets/BrandGuide.pdf";
// import { EnquiryForm } from "../Form/Form";

const people = [
  "Abusive, defamatory or obscene",
  "Fraudulent, deceptive or misleading",
  "In violation of any intellectual property right of another",
  "In violation of any law or regulation",
  "Otherwise offensive in image or language",
];

const FaqAccordion = () => {
  const listItems = people.map((person) => (
    <li>
      {/* <img className="col-md-12 dot" src={Blue} alt="Scholar" /> */}
      {person}
    </li>
  ));
  return (
   <div></div>
  );
};
export default FaqAccordion;
