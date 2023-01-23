import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Admin from "../../assets/admin.png";
import Blue from "../../assets/blue.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";

import "./_careers.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";
import React, { useState, useRef, useEffect } from "react";
import { Benefits } from "./Benefits/Benefits";

export const Careers = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      console.log(e);
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <>
      <section className="col-md-12 flexy page-background ">
        <div className="col-md-12 page-shadow header-wrapper">
          <div className="col-md-12 bannerCareers zoominheader"></div>
          <div className=" col-md-12 after"></div>
          <div className="icon ">
            <h1>Careers</h1>
            <p>Making a difference in Central Florida
</p>
<button>VIEW JOBS</button>

            <h1>
              <i class="icofont-rounded-down"></i>
            </h1>
          </div>
        </div>
      </section>

      <section className="page-content flexy ">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 careers-container">
          <div className="col-md-11">
            <div className="breadcrum" style={{ marginTop: "-30px" }}>
              {" "}
              <Breadcrum
                page1="About"
                currentPage="Welcome"
                pageUrl={"/philosophy"}
              />
            </div>
         <center>   <div className="page-menu">
              <ul className="list-inline list-unstyled">
                <li className="list-inline-item">
                  <Link to="#" className="link-alteration">
                    Welcome
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={"/philosophy"} className="link-alteration">
                    Phylosophy
                  </Link>
                </li>
                <li className="list-inline-item mobile-li">
                  <Link to={"/leadership"} className="link-alteration">
                    Leadership
                  </Link>
                </li>
                
                <li className="list-inline-item seperated-menu">
                  <div className="menu-container">
                    <h6 onClick={onClick} className="menu-trigger1">
                      More
                      <span>
                        <i class="icofont-caret-down"></i>{" "}
                      </span>
                    </h6>
                    <nav
                      ref={dropdownRef}
                      className={`menu ${isActive ? "active" : "inactive"}`}
                    >
                      <div className="">
                        <h6 onClick={onClick}>
                          <i class="icofont-ui-close"></i>
                        </h6>
                        <ul className="list-unstyled">
                          <li className=" ">
                            <Link
                              to={"/leadership"}
                              className="link-alteration"
                            >
                              Leadership
                            </Link>
                          </li>
                          <li className="">
                            <Link to={"/calendar"} className="link-alteration">
                              Calendar{" "}
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                          </li>
                          <li className="">
                            <Link to={"/contact"} className="link-alteration">
                              Contact
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                          </li>
                          <li className=" ">
                            <Link to={"/faith"} className="link-alteration">
                              Faith
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                          </li>
                          <li className=" ">
                            <Link to={"/diversity"} className="link-alteration">
                              Diversity
                            </Link>
                          </li>
                            <li>
                            <Link to={"/health-safety"} className="link-alteration">
                              Health & Safety
                            </Link>
                          </li>
                          <li>
                            <Link to={"/media"} className="link-alteration">
                              Media
                            </Link>
                          </li>
                          <li>
                            <Link to={"/news-stories"} className="link-alteration">
                              News & Stories
                            </Link>
                          </li>
                          <li>
                            <Link to={"/school-board"} className="link-alteration">
                              School Board
                              <span>
                                <i class="icofont-caret-down"></i>{" "}
                              </span>
                            </Link>
                            <ul className="list-unstyled inner-list">
                              <li>
                                <Link to={"/state-of-the-school"} className="link-alteration">
                                  State of the School
                                </Link>
                              </li>
                              <li>
                                <Link to={"/strategic-plan"} className="link-alteration">
                                  Strategic Plan
                                </Link>
                              </li>
                              <li>
                                <Link to={"/best-practices"} className="link-alteration">
                                  BEST Practices
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </li>
              </ul>
            </div></center>

            <h1 className="page-headings mb3 mt7">Get Inspired
</h1>
            <p>
              Employees at The First Academy don’t just inspire students — they create Christian leaders who choose 
              character before career, wisdom beyond scholarship, service before self, and participation as a way of 
              life. It’s the 
              diversity of those people and their ideas that inspires the excellence that runs through everything we do.


            </p>
             <h3 className="page-headings mt7">Employees at The First Academy

</h3>
<h4 className="page-headings mb5"><em>Living Curriculum Influencers

</em></h4>
            <p>
              On average, have better benefits, more time off,
               and higher pay than local public schools, helping us to attract and retain teachers longer than the public schools.
            </p>
         
            <p>
              Our students are here to learn, and you’ll never be reprimanded for sharing your testimony. It’s encouraged!


            </p>
            <p>We believe in being well-rounded, and to complement your standard continuing ed, you’ll grow in areas such as Christian
               leadership, CPR, and an array of technology.</p>
               <p>This is your chance for a meaningful career. Join our team and help make the next generation of Christian leaders. Find your career today!</p>
               <div className="flexy">
                <div className="col-md-4">
                               <div className="col-md-11">
                                   
                                   
                <Benefits icon= <i class="icofont-upload-alt"></i> description="Competitive Health and Retirement benefits"/>

                               </div>
                </div><div className="col-md-4">
                               <div className="col-md-11">
                                   
                                   
                <Benefits icon= <i class="icofont-book-alt"></i> description="Biblical integration is encouraged in every subject"/>

                               </div>
                </div><div className="col-md-4">
                               <div className="col-md-11">
                                   
                                   
                <Benefits icon = <i class="icofont-graduate"></i> description="Tuition discounts may be offered"/>

                               </div>
                </div>
               </div>



               <h2 className="page-headings mt4 mb3">Work at TFA
</h2>
<p>The First Academy is an Equal Opportunity Employer.

</p>
<p>At TFA, we are always seeking qualified talent to join our team. 
  In order to maintain a strong group of potential candidates, we gladly 
  accept resumes and applications at any time from Living Curriculum teachers.
   Employees of The First Academy not only believe that
   they have been called by God to work at the school but have been called
    to minister to students and parents.</p>
    <p>All complete applications will be reviewed by the Human Resources department. 
      If you would like more information about one of the positions posted below or 
      have questions regarding the hiring process, please contact employment@thefirstacademy.org. 
      For technical assistance with the Application, see the Troubleshooting Registration section below.</p>


<h2 className="page-headings mt4 mb3">Starting an Application

</h2>
<p>Thank you for your interest in employment at The First Academy. Please take a moment to review the available 
  positions below. When you’re ready to apply for a job:</p>


  <ol>
    <li><Link to={"#"} className="career-link">Register for an Account</Link></li>
    <li>Your ‘New Account Passwords’ will be sent to your email address (check your spam).<strong> Not receiving your password?</strong> See <Link to={"#"} className="career-link">Troubleshooting Registration </Link>listed beneath the open positions.</li>
    <li>Utilize the new password to log in. You will be brought to the User Profile page, these details are optional to fill out.</li>
    <li>Please navigate back to the  <Link to={"#"} className="career-link">Job Openings section</Link> and click the appropriate application listed below or from the opening descriptions</li>
    <li>After submitting the application, you will not be able to view the submission details or form (without re-completing an application). Please print or make a note of any documents you intend on emailing/faxing to our human resources department.</li>
    
    
    
    
    </ol>


    <div className="col-md-12 flexy application-buttons">
      <div className="col-md-6">
        <div className="col-md-11">
         <Link to={"/account-registration"}> <button>Account Registration</button></Link>
        </div>
      </div>
      <div className="col-md-6">
        <div className="col-md-11">
          <link to={"/applicant-login"}>     
               <button>Applicant Login</button>
</link>
        </div>
      </div>
    </div>

    <h2 className="page-headings mt5">Apply Now
</h2>
     <div className="col-md-12 flexy application-buttons">
      <div className="col-md-3">
        <div className="col-md-11">
           <link to={"faculty-application"}> 
          <button>Faculty Application</button>
          </link>

        </div>
      </div>
      <div className="col-md-3">
        <div className="col-md-11">
                     <link to={"staff-application"}> 

          <button>Staff Application</button>         
           </link>

        </div>
      </div><div className="col-md-3">
        <div className="col-md-11">
                               <link to={"coach-application"}> 

          <button>Coach Application</button>         
            </link>

        </div>
      </div><div className="col-md-3">
        <div className="col-md-11">
                                         <link to={"coach-application"}>     
                                                 </link>


          <button>Substitute Application</button>
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>
      <section className="module1 contentt contact-form prefooter-container">
        <Prefoooter />
      </section>
    </>
  );
};
