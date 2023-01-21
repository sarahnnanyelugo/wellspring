import "./_btc-events-tab.scss";
import { Link } from "react-router-dom";
import BlogPic1 from "../../../assets/square1.png";


export const BTCEventsTab = () => {
  return (
    <>
      <div className="btc-tab-container">
        <div className="tabs2 col-md-12">
          <div className="tabby-tab">
            <input type="radio" id="tab-3" name="tabby-tabs2" checked />
            <label for="tab-3" className="col-md-4 col-sm-4 btn1">
              Weekly Updates
            </label>
            <div className="tabby-content col-md-12">
              <p>
                Meet the Teacher for the 2022-2023 school year will be held in
                “Open House” style, with our teachers and staff looking forward
                to meeting students and families on Monday, August 8. Please
                follow the schedule below. <br />
                <br />
                1:45 PM: Meet the Teacher Registration for New Lower School
                Families <br />
                <br />
                2:00-2:30 PM: New Families <br /> <br />
                2:30-4:30 PM: Returning Families <br /> <br />
                4:00-8:00 PM: Wellspring College Spirit Night at Chick-fil-A
              </p>
              <p>
                Celebrate the start of the school year with our Wellspring
                College Family after Meet the Teacher on Monday, August 8 from
                4:00-8:00 PM at the Chick-fil-A located at 4181 Millenia Blvd,
                Orlando.
              </p>
              <p>
                This Wellspring College Takeover is a Spirit Night event, with
                proceeds going to benefit Royal-Thon. Be sure to say you’re with
                Wellspring College when you order dine-in, drive-thru, or on
                mobile order (put Wellspring College Spirit Night in the
                comments section for all mobile orders).
              </p>
              <p>Please see the event flyer <Link></Link>.</p>
            </div>
          </div>
          <div className="tabby-tab">
            <input type="radio" id="tab-4" name="tabby-tabs2" />
            <label for="tab-4" className="col-md-2 col-sm-4 btn2">
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
                Need a campus map? View it{" "}
                <Link to={"#"} className="link-alteration">
                  online here
                </Link>
                .
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
