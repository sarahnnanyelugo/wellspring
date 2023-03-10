import React, { useState } from "react";
import "./_faq-accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { FeeNavigation } from "./FeeNavigation/FeeNavigation";
import { Link } from "react-router-dom";

// import ACSI from "../../assets/acsi.png";
// import Cross from "../../assets/cross.svg";
// import Blue from "../../assets/blue.png";
// import BrandGuide from "../../assets/BrandGuide.pdf";
// import { EnquiryForm } from "../Form/Form";

const FaqAccordion = () => {
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
              resources, such as books and technology, Wellspring College does
              not. These expenses are already included in tuition, and our fees
              are approximately half of the cost charged by other Central
              Florida private schools.
            </p>
            <p>
              Every grade level plans special events and activities that vary
              from year to year. These are reflected in the grade-level fees
              outlined below.
            </p>
            <FeeNavigation
              list1="K-4 Activity Fee"
              list1Url={"/#"}
              list2="TK Activity Fee"
              list2Url={"/#"}
              list3="K Activity Fee"
              list3Url={"/#"}
              list4="1st Activity Fee"
              list4Url={"/#"}
              list5="2nd Activity Fee"
              list5Url={"/#"}
            />
            <FeeNavigation
              list1="3rd Activity Fee"
              list1Url={"/#"}
              list2="4th Activity Fee
"
              list2Url={"/#"}
              list3="5th Activity Fee"
              list3Url={"/#"}
              list4="6th Activity Fee"
              list4Url={"/#"}
              list5="7th Activity Fee"
              list5Url={"/#"}
            />
            <FeeNavigation
              list1="8th Activity Fee"
              list1Url={"/#"}
              list2="9th Activity Fee"
              list2Url={"/#"}
              list3="10th Activity Fee"
              list3Url={"/#"}
              list4="11th Activity Fee"
              list4Url={"/#"}
              list5="12th Activity Fee"
              list5Url={"/#"}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3 className="">What is SwitchApp?</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              SwitchApp is a third party company Wellspring Academy uses for aid
              assessments and tuition management. SwitchApp Grant & Aid
              Assessment determining eligibility for need-based financial
              assistance. SwitchApp Tuition Management is an online platform for
              paying tuition.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3 className="">Do you offer payment plans?</h3>
          </Accordion.Header>
          <Accordion.Body style={{ paddingBottom: "100px" }}>
            <p className="mt1">We offer two payment plan options:</p>
            <div className="flexy">
              <span>
                <i class="icofont-arrow-right"></i>
              </span>
              <div>
                <h5>Monthly</h5>
                <p>
                  will be withdrawn by SwitchApp Tuition from a bank account.
                  Pay dates to choose from are the 5th or 15th of each month.
                  For monthly payment plans, there is a one-time service charge
                  of $250 per student.
                </p>
              </div>
            </div>{" "}
            <div className="flexy mb6">
              <span>
                <i class="icofont-arrow-right"></i>
              </span>
              <div>
                <h5>Monthly</h5>
                <p>
                  will be withdrawn by SwitchApp Tuition from a bank account.
                  Pay dates to choose from are the 5th or 15th of each month.
                  For monthly payment plans, there is a one-time service charge
                  of $250 per student.
                </p>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3 className="">Do you offer tuition assistance?</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Wellspring College is committed to providing families with tuition
              affordability options and opportunities. Each family is unique and
              we seek to assist families in attaining a high-quality Christian
              education to the greatest extent possible.
            </p>
            <p>
              At this time, Wellspring College’s tuition assistance is only
              available for <span></span>
              <Link to={"#"} className="accordion-link">
                current, qualifying families.
              </Link>
            </p>
            <p>
              Tuition assistance (also referred to as financial aid, variable
              tuition, or indexed tuition) is a reduction of full tuition. The
              amount of financial need-based assistance is determined by a third
              party company, SwitchApp Grant & Aid.
            </p>
            <p>
              For our current families interested in applying for tuition
              assistance, the SwitchApp application can be started by logging in
              to <span></span>
              <Link to={"#"} className="accordion-link">
                SwitchApp
              </Link>{" "}
              choosing FACTS, then “Start Application” under “Grant & Aid.”
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h3 className="">
              Do you accept any Florida Department of Education Scholarships?
            </h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Wellspring College accepts several Florida Department of Education
              scholarships administered by Step Up For Students, including:
            </p>
            <h5>Family Empowerment Scholarship</h5>
            <p>
              The Family Empowerment Scholarship Program was enacted in 2019 and
              is designed to give more families access to private school
              education. The scholarship is accepted for students in Wellspring
              College day program. To be eligible to receive this scholarship,
              your student must be eligible to enroll in kindergarten or
              enrolled in and in attendance at a Florida public school during
              both the October and February student counts in the year prior to
              enrollment at Wellspring College. To find out more information
              about the application process, please visit the{" "}
              <Link to={"#"} className="accordion-link">
                Step Up For Students website.
              </Link>
            </p>
            <h5>Florida Tax Credit Scholarship</h5>
            <p>
              The Florida Tax Credit Scholarship is an income-based scholarship
              administered through the Step Up for Students Organization. This
              scholarship is accepted for students in Wellspring College day
              program. To find out more information about the Step Up For
              Students scholarship, please visit the{" "}
              <Link to={"#"} className="accordion-link">
                Step Up For Students website.
              </Link>
            </p>
            <h5>The Hope Scholarship</h5>
            <p>
              The Hope Scholarship was created to give parents the option to
              place their student in a safer family environment. This
              scholarship is accepted for students in Wellspring College day
              program. To find out more information about the Hope Scholarship,
              please visit the Step Up For Students website.
            </p>
            <h5>The Family Empowerment Unique Abilities Scholarship</h5>
            <p>
              The Family Empowerment Scholarship for Students with Unique
              Abilities (FES-UA) is different than other state scholarships in
              that it allows parents to personalize the education of their
              children with unique abilities by directing money toward a
              combination of programs and approved providers. These include
              schools, therapists, specialists, curriculum, technology – even a
              college savings account. For information about qualification
              requirements and to apply for this scholarship, please visit the
              <Link to={"#"} className="accordion-link">
                Step Up For Students website.
              </Link>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h3 className="">
              What about other options for affording tuition?
            </h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Some First Academy families take advantage of the following
              options for affording tuition:
            </p>
            <h5>529 Plan</h5>
            <p>
              Under the Tax Cuts and Jobs Act (December 2017), qualified
              distributions of up to $10,000 per year from 529 plans are allowed
              for K-12 tuition at any private school.
            </p>
            <h5>Coverdell Education Savings Account</h5>
            <p>
              Parents who meet certain income guidelines are eligible to
              contribute up to $2,000 per year to a Coverdell ESA. Contributions
              are made from your after-tax income, and earnings on those
              contributions grow tax-free. Distributions from these accounts
              aren’t taxed if they are used for qualified education expenses
              such as private school tuition and fees, books, supplies,
              uniforms, and tutoring.
            </p>
            <h5>Dependent Care Flexible Spending Account</h5>
            <p>
              If your employer offers a Dependent Care Flexible Spending
              Account, funds you deposit can be used toward eligible dependent
              care expenses. Since contributions to a Dependent Care Flexible
              Spending Account are pre-tax, it can be a great way to save on
              your overall expenses. Eligible dependent care expenses include
              afterschool programs, preschool and K-4 tuition, and even summer
              camps for dependent children under the age of 13. To find out how
              this might impact your personal situation, make sure to talk to
              your accountant or financial advisor.
            </p>
            <h5>Roth IRA</h5>
            <p>
              Roth IRA contributions (not investment returns) can be distributed
              at any age without penalty. This can be a great way to fund
              private school tuition as the investment earnings keep growing
              after withdrawing the original contributions. You should never
              compromise your future financial security. If you determine that
              you don’t need to rely on these funds for retirement and you enact
              proper investment strategies, a Roth IRA can be a great way to
              help fund your private school education.{" "}
            </p>
            <h5>Other Family Assistance</h5>
            <p>
              Grandparents and other family members may be willing to help
              support your student with the gift of tuition. Whether they
              contribute by directly paying a portion of your student’s tuition
              or by investing in one of the options outlined above, this can be
              an invaluable resource for the education of your student.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h3 className="">
              My child is a non-US resident. Are there any additional fees for
              international students?
            </h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              For the 2022-2023 school year, non-US residents will pay a $3,750
              fee per student (new or returning). For more information on
              international admissions, please visit our Admissions FAQ page.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h3 className="">What is your policy on tuition refunds?</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              For more information about refunds for if/when a student
              withdrawals from Wellspring College, please visit{" "}
              <Link to={"#"} className="accordion-link">
                our Tuition Refund Program section.
              </Link>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default FaqAccordion;
