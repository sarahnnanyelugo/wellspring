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
         <p>Congrats to the Class of 2023’s Enzo Sioson for qualifying as a National Merit Scholarship Semifinalist! Of the 1.5 million entrants around the world, only 16,000 high school seniors qualified for this
             recognition after taking the PSAT/NMSQT® their junior year. We are so proud of Enzo for this achievement.</p>
             <p>The National Merit® Scholarship Program is an academic competition for recognition and scholarships that began in 1955. High school students enter the National Merit Program by taking the Preliminary
                 SAT/National Merit Scholarship Qualifying Test (PSAT/NMSQT®).</p>
                 <h4>AP Scholars
</h4>
<h4></h4>
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