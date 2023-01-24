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
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h4 className="page-headings">Academic Awards & Achievements</h4>
        </Accordion.Header>
        <Accordion.Body>1</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h4 className="page-headings">The First Academy Affiliations</h4>
        </Accordion.Header>
        <Accordion.Body>2</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h4 className="page-headings">Brand Standards</h4>
        </Accordion.Header>
        <Accordion.Body>3</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h4 className="page-headings">Logo Files</h4>
        </Accordion.Header>
        <Accordion.Body>4</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <h4 className="page-headings">Vendor Request Form</h4>
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
        <Accordion.Body>
          <p>
            The First Academy website and social media pages are intended to be
            safe, inviting and informative spaces. Please note that The First
            Academy does not endorse nor is it responsible for the accuracy of
            opinions, claims, advice or other information shared on any of the
            pages by fans, commenters, or third parties.
          </p>
          <p>
            We expect users of our pages to act maturely, behave responsibly and
            respect the rights and dignity of fellow community members, and the
            terms provided by social media entities on posting guidelines.
            Please understand that The First Academy may remove postings that
            are:
          </p>
          <ul className="list-unstyled">{listItems}</ul>
          <p>
            We may ban anyone posting material that falls into the above
            categories from participating in any of our outlets.
          </p>
          <p>
            The First Academy respects your privacy and will not share your
            personal information without your consent. However, if you choose to
            post your personal information on these outlets, it will be
            available for others to see and use.
          </p>
          <p>
            The First Academy reserves the right to change these terms and its
            content at any time.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>
          <h4 className="page-headings">Nondiscriminatory Policy</h4>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            The First Academy admits the students of any race to all the rights,
            privileges, programs, and activities generally accorded or made
            available to students at that school and the school does not
            discriminate on the basis of race in administration of its
            educational policies, admissions policies, scholarship and loan
            programs, and athletic and other school-administered programs.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default FaqAccordion;
