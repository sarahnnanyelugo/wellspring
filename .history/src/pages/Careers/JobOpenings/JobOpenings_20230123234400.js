import "./_job-openings.scss";

import Computer from "../../../assets/computer-room.png";
import Piano from "../../../assets/piano.png";
import Speech from "../../../assets/gallery.png";
import Blue from "../../../assets/blue.png";
import { Link } from "react-router-dom";







export const JobOpenings = () => {
  return (
    <>
      <div class="diversity-tab-container3">
        <div class="tab-wrap">
          <input type="radio" id="tab8" name="tabGroup1" class="tab" checked />
          <label for="tab8" className="cool-link">
            Faculty Positions
          </label>
          <input type="radio" id="tab9" name="tabGroup1" class="tab" checked />
          <label for="tab9" className="cool-link">
            Extended Educational Positions
          </label>{" "}
          <input type="radio" id="tab10" name="tabGroup1" class="tab" checked />
          <label for="tab10" className="cool-link">
            Staff Positions
          </label>
          <input type="radio" id="tab11" name="tabGroup1" class="tab" checked />
          <label for="tab11" className="cool-link">
            Athletic Positions
          </label>
          <div class="tab__content">
            <h2 className="page-headings">Day School Openings</h2>
            <ul className="list-unstyled job-openings-list">
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Choral Director</strong>
                <ul>
                  <li>
                    Now accepting applications for{" "}
                    <Link to={"#"} className="career-link">
                      Choral Director for 2022-2023.
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Middle School Art Teacher</strong>
                <ul>
                  <li>
                    Now accepting applications for{" "}
                    <Link to={"#"} className="career-link">
                      Middle School Art Teacher for 2023-2024.
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Middle School Science Teacher</strong>
                <ul>
                  <li>
                    <Link to={"#"} className="career-link">
                      Now accepting applications for Middle School Science
                      Teacher for 2023-2024.{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Middle & Upper School Math Teacher</strong>
                <ul>
                  <li>
                    Now accepting applications for{" "}
                    <Link to={"#"} className="career-link">
                      Middle & Upper School Math Teacher for 2023-2024.
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Faculty Fellows</strong>
                <ul>
                  <li>
                    Now accepting applications for{" "}
                    <Link to={"#"} className="career-link">
                      Faculty Fellows for 2023-2024. Learn more about the
                      Faculty Fellows Program.{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Substitute Teachers</strong>
                <ul>
                  <li>
                    Now accepting applications for{" "}
                    <Link to={"#"} className="career-link">
                      Substitute Teachers{" "}
                    </Link>
                    in all subjects and grade levels. Experience is preferred.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Ready to apply?</strong> Go to{" "}
              <Link to={"#"} className="career-link">
                Faculty Application{" "}
              </Link>
              or{" "}
              <Link to={"#"} className="career-link">
                Substitute Application.{" "}
              </Link>
            </p>
            <small>
              <em>
                Since God’s love extends equally to all people, The First
                Academy welcomes and encourages any of His children regardless
                of race, color, or nationality to apply for any careers of their
                choosing.
              </em>
            </small>
            <h3 className="page-headings">Troubleshooting Registration</h3>
            <p>
              Please do NOT try to login using the blue portal button atop the
              page, that is our internal portal. Instead login from the light
              blue ‘Applicant Login’ button below.
            </p>
            <p>
              <strong>Using HOTMAIL, OUTLOOK or MSN for Email?</strong>{" "}
              Occasionally, these accounts ‘Junk’ the ‘New user account
              passwords’ email, check your spam or junk folder. If you haven’t
              received an email after 5 minutes, please send your username and
              registered-with email address to{" "}
              <Link to={"#"} className="career-link">
                employment@wellspringcollege.org
              </Link>
              , and your password will be configured and sent to the
              registered-with email address.
            </p>
            <small>
              <em>Transparency in Insurance Coverage Rule Disclaimer:</em> This
              link leads to the machine-readable files that are made available
              in response to the federal Transparency in Coverage Rule and
              includes negotiated service rates and out-of-network allowed
              amounts between health plans and healthcare providers. The machine
              readable files are formatted to allow researchers, regulators, and
              application developers to more easily access and analyze data.
            </small>
          </div>
          <div class="tab__content">
            <h2 className="page-headings">
              Extended Educational Program Openings
            </h2>
            <ul className="list-unstyled job-openings-list">
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Nursery School Program Coordinator</strong>
                <ul>
                  <li>
                    Opening in August 2023, The Nursery School is now accepting
                    applications for a full-time
                    <Link to={"#"} className="career-link">
                      Nursery School Program Coordinator.
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Substitute Teachers</strong>
                <ul>
                  <li>
                    <Link to={"#"} className="career-link">
                      The First Hope
                    </Link>{" "}
                    and
                    <Link to={"#"} className="career-link">
                      The Classical School
                    </Link>
                    are now accepting applications for Substitute Teachers
                    willing to work with students with unique needs.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Ready to apply?</strong> Go to{" "}
              <Link to={"#"} className="career-link">
                Faculty Application
              </Link>
              or{" "}
              <Link to={"#"} className="career-link">
                Substitute Application.{" "}
              </Link>
            </p>
            <small>
              <em>
                Since God’s love extends equally to all people, The First
                Academy welcomes and encourages any of His children regardless
                of race, color, or nationality to apply for any careers of their
                choosing.
              </em>
            </small>
            <h3 className="page-headings">Troubleshooting Registration</h3>
            <p>
              Please do NOT try to login using the blue portal button atop the
              page, that is our internal portal. Instead login from the light
              blue ‘Applicant Login’ button below.
            </p>
            <p>
              <strong>Using HOTMAIL, OUTLOOK or MSN for Email?</strong>{" "}
              Occasionally, these accounts ‘Junk’ the ‘New user account
              passwords’ email, check your spam or junk folder. If you haven’t
              received an email after 5 minutes, please send your username and
              registered-with email address to{" "}
              <Link to={"#"} className="career-link">
                employment@wellspringcollege.org
              </Link>
              , and your password will be configured and sent to the
              registered-with email address.
            </p>
            <small>
              <em>Transparency in Insurance Coverage Rule Disclaimer:</em> This
              <Link to={"#"} className="career-link">
                link
              </Link>
              leads to the machine-readable files that are made available in
              response to the federal Transparency in Coverage Rule and includes
              negotiated service rates and out-of-network allowed amounts
              between health plans and healthcare providers. The machine
              readable files are formatted to allow researchers, regulators, and
              application developers to more easily access and analyze data.
            </small>
          </div>
          <div class="tab__content">
            <h2 className="page-headings">Staff Positions</h2>
            <p>
              The First Academy has the following Staff Position openings at
              this time.
            </p>
            <ul className="list-unstyled job-openings-list">
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Aftercare Assistants</strong>
                <ul>
                  <li>
                    The First Academy is now accepting applications for
                    part-time
                    <Link to={"#"} className="career-link">
                      Aftercare Assistant positions.
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Concessions Assistant</strong>
                <ul>
                  <li>
                    The First Academy is now accepting applications for a
                    part-time
                    <Link to={"#"} className="career-link">
                      Concessions Assistant.
                    </Link>{" "}
                    are now accepting applications for Substitute Teachers
                    willing to work with students with unique needs.
                  </li>
                </ul>
              </li>
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Nursery School Program Coordinator</strong>
                <ul>
                  <li>
                    Opening in August 2023, The Nursery School is now accepting
                    applications for a full-time
                    <Link to={"#"} className="career-link">
                      Nursery School Program Coordinator.{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <img className="col-md-12 dot" src={Blue} alt="Scholar" />{" "}
                <strong>Student Life Events Coordinator</strong>
                <ul>
                  <li>
                    TThe First Academy is now accepting applications for a
                    full-time
                    <Link to={"#"} className="career-link">
                      Student Life Events Coordinator.
                    </Link>{" "}
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Ready to apply?</strong> Go to{" "}
              <Link to={"#"} className="career-link">
                Staff Application
              </Link>
              or{" "}
              <Link to={"#"} className="career-link">
                Substitute Application.{" "}
              </Link>
            </p>
            <small>
              <em>
                Since God’s love extends equally to all people, The First
                Academy welcomes and encourages any of His children regardless
                of race, color, or nationality to apply for any careers of their
                choosing.
              </em>
            </small>
            <h3 className="page-headings">Troubleshooting Registration</h3>
            <p>
              Please do NOT try to login using the blue portal button atop the
              page, that is our internal portal. Instead login from the light
              blue ‘Applicant Login’ button below.
            </p>
            <p>
              <strong>Using HOTMAIL, OUTLOOK or MSN for Email?</strong>{" "}
              Occasionally, these accounts ‘Junk’ the ‘New user account
              passwords’ email, check your spam or junk folder. If you haven’t
              received an email after 5 minutes, please send your username and
              registered-with email address to{" "}
              <Link to={"#"} className="career-link">
                employment@wellspringcollege.org
              </Link>
              , and your password will be configured and sent to the
              registered-with email address.
            </p>
            <small>
              <em>Transparency in Insurance Coverage Rule Disclaimer:</em> This
              <Link to={"#"} className="career-link">
                link
              </Link>
              leads to the machine-readable files that are made available in
              response to the federal Transparency in Coverage Rule and includes
              negotiated service rates and out-of-network allowed amounts
              between health plans and healthcare providers. The machine
              readable files are formatted to allow researchers, regulators, and
              application developers to more easily access and analyze data.
            </small>
          </div>
          <div class="tab__content">
            <h2 className="page-headings">Athletic Positions</h2>
            <p>
              The Athletics Department is always looking for experienced
              coaches. Positions are continually posted as they become
              available.
            </p>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
