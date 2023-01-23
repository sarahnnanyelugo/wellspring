import "./_job-openings.scss";

import Computer from "../../../assets/computer-room.png";
import Piano from "../../../assets/piano.png";
import Speech from "../../../assets/gallery.png";
import Blue from "../../../assets/blue.png";
import { Link } from "react-router-dom";
export const JobOpenings = () => {
  return (
    <>
      <div class="job-openings-container">
        <div class="tab-wrap">
          <input type="radio" id="tab1" name="tabGroup1" class="tab" checked />
          <label for="tab1" className="cool-link">
            Faculty Positions
          </label>
          <input type="radio" id="tab2" name="tabGroup1" class="tab" checked />
          <label for="tab2" className="cool-link">
            Extended Educational Positions
          </label>{" "}
          <input type="radio" id="tab3" name="tabGroup1" class="tab" checked />
          <label for="tab3" className="cool-link">
            Staff Positions
          </label>
          <input type="radio" id="tab4" name="tabGroup1" class="tab" checked />
          <label for="tab4" className="cool-link">
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
            <h3 classTroubleshooting Registration</h3>
          </div>
          <div class="tab__content">
            <p>
              The Diversity Task Force members are Clark Keator (Board Chair),
              Archbishop Allen Wiggins (Board Member), Bishop-Elect Derrick
              McRae (Board Member), Laura Eitel (Board Member), Gissel Valois
              (Director of Strategic Initiatives), and Will Cohen (Athletic
              Director). The Diversity Task Force will guide the responses of
              Wellspring in the areas of racial harmony and campus unity.
            </p>
          </div>
          <div class="tab__content">
            <p>
              <span>Lower School: </span>
              Sarah Rosario, Dean Middleton, Corey Wall, Kerry Ann Cole
            </p>{" "}
            <p>
              <span>Middle & Upper School : </span>
              Leroy Kinard, Joyce Kwak, Dave Oliver, Florence Pierre-Louis,
              Michael Timpson
            </p>
          </div>{" "}
          <div class="tab__content">
            <p>
              <span>Lower School: </span>
              Sarah Rosario, Dean Middleton, Corey Wall, Kerry Ann Cole
            </p>{" "}
            <p>
              <span>Middle & Upper School : </span>
              Leroy Kinard, Joyce Kwak, Dave Oliver, Florence Pierre-Louis,
              Michael Timpson
            </p>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
