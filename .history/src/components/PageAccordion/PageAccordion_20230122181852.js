import React, { useState } from "react";
import './_page-accordion.scss'
import Accordion from 'react-bootstrap/Accordion';

const PageAccordion = ({ questionsAnswers }) => {
   return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h4 className="page-headings">Academic Awards & Achievements</h4></Accordion.Header>
        <Accordion.Body>
            <h4 className="page-headings">Congratulations to our National Merit Commended Students
</h4>
         <p></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default PageAccordion;