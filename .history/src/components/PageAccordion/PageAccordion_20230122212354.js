import React, { useState } from "react";
import './_page-accordion.scss'
import Accordion from 'react-bootstrap/Accordion';
import ACSI from "../../assets/acsi.png";
import Cross from "../../assets/cross.svg";
import Blue from "../../assets/blue.png";
import CampusMap from "../../assets/campus-map.pdf";

const PageAccordion = ({ questionsAnswers }) => {
   return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h4 className="page-headings">Academic Awards & Achievements</h4></Accordion.Header>
        <Accordion.Body>
            <h4 className="page-headings mt4 mb4">Congratulations to our National Merit Commended Students
</h4>
         <p>Congrats to the Class of 2023’s Enzo Sioson for qualifying as a National Merit Scholarship Semifinalist! Of the 1.5 million entrants around the world, only 16,000 high school seniors qualified for this
             recognition after taking the PSAT/NMSQT® their junior year. We are so proud of Enzo for this achievement.</p>
             <p>The National Merit® Scholarship Program is an academic competition for recognition and scholarships that began in 1955. High school students enter the National Merit Program by taking the Preliminary
                 SAT/National Merit Scholarship Qualifying Test (PSAT/NMSQT®).</p>
                 <h5 className="page-headings">AP Scholars
</h5>
<p>We are excited to share that 61 Upper School students were recognized as CollegeBoard’s AP scholars for various levels. We are proud of this special recognition and we believe that our students are making a positive impact on our AP program.

</p>
<h6 className="page-headings mt5 mb4">Award Levels
</h6>

 <ul className="list-unstyled">
        <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
<strong>AP Scholar:</strong> Granted to students who receive scores of 3 or higher on three or more AP Exams

              </li>{" "} <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
<strong>AP Scholar with Honor:</strong> Granted to students who receive an average score of at least 3.25 on
 all AP Exams taken, and scores of 3 or higher on four or more of these exams

              </li>{" "} <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
<strong>AP Scholar with Distinction:</strong> Granted to students who receive an average score of at least 3.5 
on all AP Exams taken, and scores of 3 or higher on five or more of these exams

              </li>{" "} <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
<strong>State AP Scholar:</strong> Granted to the one male and one female student in each U.S. state and the District of Columbia with scores of 3 or higher on 
the greatest number of AP Exams, and then the highest average score (at least 3.5) on all AP Exams taken

              </li>{" "}  <li>
                {" "}
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />
<strong>National AP Scholar:</strong> Granted to students in the United States who receive an average score of at least 4 on all AP Exams taken, and scores of 4 or higher on eight or more of these exams


              </li>{" "} 
<p>You can see your award by logging in to your CollegeBoard account where you viewed your AP scores.

</p>
    </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h4 className="page-headings">The First Academy Affiliations</h4></Accordion.Header>
<Accordion.Body>
    <p>TFA is accredited by the Florida Council of Independent Schools (FCIS), the Florida Kindergarten Council (FKC), the Southern Association of Independent Schools (SAIS), the Southern Association of Colleges and Schools (SACS), and the Association of Christian Schools International (ACSI).

</p>
<ul className="list-unstyled key1-list">
    <li><span>¹ACSI</span>………………………………………Association of Christian Schools International

</li> <li><span>ASCD</span>……………………………………….Association for Supervision and Curriculum Development



</li> <li><span>CESA</span>………………………………………Council on Educational Standards & Accountability



</li> <li><span>¹ISM</span>………………………………………Independent School Management

</li> <li><span>¹FCIS</span>………………………………………Florida Council of Independent Schools



</li> <li><span>¹SAIS</span>………………………………………Southern Association of Independent Schools



</li> <li><span>NASSP</span>………………………………………National Association of Secondary School Principals


</li> <li><span>SACAC</span>………………………………………Southern Association for College Admission Counseling


</li> <li><span>NACAC</span>………………………………………National Association for College Admission Counseling


</li>
</ul>
     <img className="col-md-3" src={ACSI} alt="Scholar" />
<h5 className="page-headings col-md-8 mt3">¹SACS / CASI   Southern Association of Colleges and Schools /
Council on Accreditation and School Improvement</h5>
<div className="flexy mt5">
    <div className=" small-cross">
             <img className="" src={Cross} alt="Scholar" />
    </div>
    <h5 className="page-headings mr6">- Membership  </h5>

    <h5 className="page-headings">¹ – Accreditation </h5>

</div>
</Accordion.Body>
          
      </Accordion.Item>


      <Accordion.Item eventKey="2">
        <Accordion.Header><h4 className="page-headings">Brand Standards</h4></Accordion.Header>
        <Accordion.Body>
         <p><strong>Graphic Standards convey guidance to the TFA Community in designing consistent products.</strong> These include but are not limited to Marketing materials, Print and Web Media, Signs, Videos and other merchandise. In addition, the guide assists approved web and graphic designers, printers, advertising agencies, Administration and approved users.

</p>
<p>The Standards are not made to prevent creativity, but to protect our visual identity and brand. Consistent application will help to promote our school and send a positive message when done appropriately. Please reference the Branding & Graphic Standards guide for proper usage of The First Academy logos, colors, and media.

</p>
<h2 className="page-headings">Branding & Graphic Standards Guide
</h2>
<a href={BrandGu} target="_blank">Download Branding Guide (PDF)</a>
<h6 className="mt4 mb4">Guide Includes:

</h6>
<ul className="list-unstyled">
    <li>– Which logo is permissible to use
</li>
    <li>– Which file format to select
</li>
    <li>– School colors and typefaces
</li>
    <li>– Clarity and guidance pertaining to our brand

</li>
    </ul>
    <div data-url="https://issuu.com/thefirstacademy/docs/brand_and_graphic_standards"
      className="issuuembed issuu-isrendered col-md-12">
        <iframe src="https://e.issuu.com/embed.html?identifier=ey7whxb16t0w&amp;embedType=script&amp;u=thefirstacademy&amp;d=brand_and_graphic_standards&amp;p=1"  title="issuu.com" style={{width:'100%', height:'500px'}}
    sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads
     allow-scripts allow-same-origin allow-popups allow-forms" allowfullscreen="" webkitallowfullscreen=""
      mozallowfullscreen="" msallowfullscree="" allow="clipboard-write"></iframe></div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default PageAccordion;