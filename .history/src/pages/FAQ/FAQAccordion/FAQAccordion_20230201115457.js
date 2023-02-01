import React, { useState } from "react";
import "./_faq--accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

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
            <h2 className="page-headings">
              What are the tuition costs at The First Academy?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Please visit the{" "}
              <Link to={"/tuition"} className="random-link">
                Tuition & Fees
              </Link>{" "}
              page for this year’s tuition expenses.
            </p>
          </Accordion.Body>
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
          <Accordion.Body>
            <p>
              The First Academy accepts international students. Students must
              have a F1 Visa, F2 Visa, or be a dependent on a parent’s Visa.
              Visitor Visas such as B1 and B2 are NOT accepted. Additionally,
              all students must be fluent at speaking, reading, and writing
              English
            </p>
            <p>
              In addition to tuition, there is an international fee of $3,750
              per student. The First Academy does not offer boarding or homestay
              through the school for international students.
            </p>
            <p>For more information, visit TFA’s International FAQ page.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h2 className="page-headings">
              At what age is my child eligible for The First Academy K4 program?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Students should be four years old by September 1 to be eligible
              for our K4 program. See our Admissions Events for scheduled
              screening dates and times.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h2 className="page-headings">
              What are school hours or divisional schedules?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Students may be dropped off as early as 7:30am. Please reference
              the schedules below for appropriate pick-up times.
            </p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to={"/"} className="random-link">
                  Preschool Schedule
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"} className="random-link">
                  {" "}
                  Lower School Schedule{" "}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"} className="random-link">
                  Middle School Schedule
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"} className="random-link">
                  Upper School Schedule
                </Link>
              </li>
            </ul>
            <p>
              The
              <Link to={"/"} className="random-link">
                After School Program
              </Link>{" "}
              provides supervised student activities KPrep through 12th grade,
              until 6:00 PM. Our Preschool students have the option to do
              <Link to={"/"} className="random-link">
                {" "}
                Wrap Around Care.
              </Link>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h2 className="page-headings">What does tuition cover?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Tuition includes most textbooks, technology, and lab use. Please
              see the{" "}
              <Link to={"/"} className="random-link">
                Activity Fee list
              </Link>
              , on the Tuition & Fees page, for a helpful list of most fees and
              optional charges that may apply to you.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h2 className="page-headings">
              Where do I purchase school uniforms?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Our uniform provider is Dennis Uniforms. Items can be purchased
              online or in store at 1101 N. Keller Road, Suite G-3, Orlando, FL
              32810. Please review our Uniform Policies in the Parent-Student
              Handbook or Back to School Packet. Sunshine uniforms are not
              permitted.
            </p>
            <p>
              Families may also purchase spirit wear, uniform tops, outwear, and
              additional Royal gear in person or online at our School Store
              located in the front of the Cramer Family Field House.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h4 className="page-headings">Nondiscriminatory Policy</h4>
          </Accordion.Header>
          <Accordion.Body>8</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h4 className="page-headings">Nondiscriminatory Policy</h4>
          </Accordion.Header>
          <Accordion.Body>8</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h4 className="page-headings">Nondiscriminatory Policy</h4>
          </Accordion.Header>
          <Accordion.Body>8</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h4 className="page-headings">Nondiscriminatory Policy</h4>
          </Accordion.Header>
          <Accordion.Body>8</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h4 className="page-headings">Nondiscriminatory Policy</h4>
          </Accordion.Header>
          <Accordion.Body>8</Accordion.Body>
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
