import "./_btc-events-tab.scss";
import { Link } from "react-router-dom";
import BlogPic1 from "../../../assets/square1.png";


export const BTCEventsTab = () => {
  return (
    <>
      <div className="btc-tab-container">
        <div className="tabs col-md-12">
          <div className="tabby-tab">
            <input type="radio" id="tab-3" name="tabby-tabs" checked />
            <label for="tab-3" className="col-md-4 col-sm-4 btn1">
              Weekly Updates
            </label>
            <div className="tabby-content col-md-12">
              <p>
                Stay updated with the latest information with our weekly
                updates:
              </p>
              <div className="col-md-4">
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
                <Link to={"#"} className="link-alteration">
                  Thursday, August 4
                </Link>
                <br />
              </div>
            </div>
          </div>
          <div className="tabby-tab">
            <input type="radio" id="tab-4" name="tabby-tabs" />
            <label for="tab-2" className="col-md-2 col-sm-4 btn2">
              New Families
            </label>
            <div className="tabby-content">
              <p>
                New Here? Learn more about New Family information{" "}
                <Link to={"#"} className="link-alteration">
                  online here
                </Link>
                .
              </p>
              <p>
                <strong>New Family Event Schedule:</strong>
              </p>
              <p>
                <span style={{ borderBottom: "solid 1px black" }}>
                  {" "}
                  Thursday, August 4th:{" "}
                </span>
                Middle and Upper School New Student Event ‘Schedules and Snow
                Cones’ from 2:00- 3:00 PM, Upper School Building. <br />
                RSVP{" "}
                <Link to={"#"} className="link-alteration">
                  here
                </Link>{" "}
                by August 1.
                <br />
                June- August: ‘Details & Donuts’ for New Families, click to
                learn more and RSVP
                <Link to={"#"} className="link-alteration">
                  {" "}
                  https://wellspringcollege.org/admissions/new-family-information/
                </Link>
              </p>
              <h6>New Family Newsletters:</h6>

              <ul className="list-unstyled">
                <li>
                  <Link to={"#"} className="link-alteration">
                    August 1 Newsletter
                  </Link>
                </li>{" "}
                <li>
                  <Link to={"#"} className="link-alteration">
                    August 1 Newsletter
                  </Link>
                </li>{" "}
                <li>
                  <Link to={"#"} className="link-alteration">
                    August 1 Newsletter
                  </Link>
                </li>{" "}
                <li>
                  <Link to={"#"} className="link-alteration">
                    August 1 Newsletter
                  </Link>
                </li>{" "}
                <li>
                  <Link to={"#"} className="link-alteration">
                    August 1 Newsletter
                  </Link>
                </li>
              </ul>
              <p>
                Have questions about Carline, Arrival and Dismissal? Watch this
                video to learn more.
              </p>
              <p>
                Need a campus map? View it <Link to={"#"} className="link-alteration">online here</Link>.
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
