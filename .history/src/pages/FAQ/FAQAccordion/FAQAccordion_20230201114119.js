import React, { useState } from "react";
import "./_faq--accordion.scss";
import Accordion from "react-bootstrap/Accordion";

const FAQAccordion = () => {
  return (
    <div className="faq-accordion-container">
      {" "}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h2 className="page-headings">
              How long has Wellspring Academy been in Lagos State Nigeria?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The Wellspring College was founded in ------. Starting with grades
              K-6, the school added a grade level each year until our first
              senior class graduated in 1994. In each of the classes graduating
              since that time, every graduating senior has been accepted to
              college.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h2 className="page-headings">Is the school accredited?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The First Academy is accredited by the Florida Council of
              Independent Schools (FCIS), the Florida Kindergarten Council
              (FKC), the Southern Association of Independent Schools (SAIS), the
              Southern Association of Colleges and Schools (SACS), and the
              Association of Christian Schools International (ACSI).
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4 className="page-headings">Brand Standards</h4>
          </Accordion.Header>
          <Accordion.Body>3</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h2 className="page-headings">How many students are enrolled?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              There are more than 1,200 students enrolled in TFA’s Lower School,
              Middle School, Upper School, The Classical School, The First Hope,
              and Preschool.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h2 className="page-headings">
              Does The First Academy accept international students?
            </h2>
          </Accordion.Header>
          <Accordion.Body>5</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h4 className="page-headings">Privacy Policy</h4>
          </Accordion.Header>
          <Accordion.Body>6</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h4 className="page-headings">Terms of Use</h4>
          </Accordion.Header>
          <Accordion.Body>7</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h4 className="page-headings">Nondiscriminatory Policy</h4>
          </Accordion.Header>
          <Accordion.Body>8</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default FAQAccordion;
