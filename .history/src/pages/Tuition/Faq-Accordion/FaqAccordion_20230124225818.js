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
    <div className="col-md-12 faq-accordion">
      {" "}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3 className="">Are there any fees in addition to tuition?</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Knowing a school’s fees is just as important as knowing the
              tuition. While most schools charge additional fees for educational
              resources, such as books and technology, The First Academy does
              not. These expenses are already included in tuition, and our fees
              are approximately half of the cost charged by other Central
              Florida private schools. 
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3 className="">The First Academy Affiliations</h3>
          </Accordion.Header>
          <Accordion.Body>2</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3 className="">Brand Standards</h3>
          </Accordion.Header>
          <Accordion.Body>3</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3 className="">Logo Files</h3>
          </Accordion.Header>
          <Accordion.Body>4</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h3 className="">Vendor Request Form</h3>
          </Accordion.Header>
          <Accordion.Body>5</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h3 className="">Privacy Policy</h3>
          </Accordion.Header>
          <Accordion.Body>6</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h3 className="">Terms of Use</h3>
          </Accordion.Header>
          <Accordion.Body>7</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h3 className="">Nondiscriminatory Policy</h3>
          </Accordion.Header>
          <Accordion.Body>8</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default FaqAccordion;
