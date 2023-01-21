import "./_page-tab.scss";

// import Admin from "../../../assets/admin2.png";
// import Principal from "../../../assets/principal.png";
// import Speech from "../../../assets/speech2.png";
// import { DirectoryProfile } from "../DirectoryProfile/DirectoryProfile";

export const PageTab = () => {
  return (
    <>
      <div class="diversity-tab-container">
        <div class="tab-wrap">
          <input type="radio" id="tab1" name="tabGroup1" class="tab" checked />
          <label for="tab1" className="cool-link">
            Guiding Principles
          </label>
          <input type="radio" id="tab2" name="tabGroup1" class="tab" checked />
          <label for="tab2" className="cool-link">
            Expanded Statement
          </label>

          {/* <div className="tab-boda"></div> */}

          <div class="tab__content">
            {/* <ul className="list-unstyled">
                <li>
                  <span>1.</span>All that we say and do with respect to race and
                  ethnicity will reflect our commitment to the Gospel of the
                  Lord Jesus Christ. Ephesians 2:19-22
                </li>
                <li>
                  <span>2.</span>We will collectively accept responsibility for
                  our failures, we will graciously celebrate our successes, and
                  we will humbly walk together in the spirit of love and
                  forgiveness demonstrating an understanding that until we reach
                  heaven we remain sinners in need of grace and mercy. Romans
                  3:23 and Ephesians 4:32
                </li>
                <li>
                  <span>3.</span>The school will take the primary lead in
                  setting classroom instructional objectives and campus
                  behavioral standards with the home and church as supportive
                  partners. The home will take the lead in discipling the heart
                  and shaping Christian character in the lives of their children
                  through active engagement in the local church and through
                  serving in the community with the school as a supportive
                  partners. Proverbs 22:6 and Deuteronomy 6:6-9
                </li>
                <li>
                  <span>4.</span>The school will administer discipline for
                  racial infractions equitably for students of all ethnicities,
                  redemptively with Christlikeness as the objective, and
                  progressively from suspension to expulsion. II Timothy 3:16-17
                </li>
                <li>
                  <span>5.</span>We will collectively seek to love one another
                  by assuming the best possible motives when engaging in
                  intercultural communication. 1 Corinthians 13:7
                </li>
              </ul> */}
            <p>
              <span>1</span>All that we say and do with respect to race and
              ethnicity will reflect our commitment to the Gospel of the Lord
              Jesus Christ. Ephesians 2:19-22
            </p>{" "}
            <p>
              <span>2</span>We will collectively accept responsibility for our
              failures, we will graciously celebrate our successes, and we will
              humbly walk together in the spirit of love and forgiveness
              demonstrating an understanding that until we reach heaven we
              remain sinners in need of grace and mercy. Romans 3:23 and
              Ephesians 4:32
            </p>{" "}
            <p>
              <span>3</span>rThe school will take the primary lead in setting
              classroom instructional objectives and campus behavioral standards
              with the home and church as supportive partners. The home will
              take the lead in discipling the heart and shaping Christian
              character in the lives of their children through active engagement
              in the local church and through serving in the community with the
              school as a supportive partners. Proverbs 22:6 and Deuteronomy
              6:6-9
            </p>{" "}
            <p>
              <span>4</span>The school will administer discipline for racial
              infractions equitably for students of all ethnicities,
              redemptively with Christlikeness as the objective, and
              progressively from suspension to expulsion. II Timothy 3:16-17
            </p>{" "}
            <p>
              <span>5</span>We will collectively seek to love one another by
              assuming the best possible motives when engaging in intercultural
              communication. 1 Corinthians 13:7
            </p>
          </div>
          <div class="tab__content">
            <div className="col-md-12 flexy ">
              <div className="col-md-7">
                <p>
                  <strong>
                    First, we believe the power of the Gospel transforms our
                    thoughts, attitudes, and actions.{" "}
                  </strong>
                  <br />
                  “The Messiah has made things up between us so that we’re now
                  together . . . He tore down the wall we used to keep each
                  other at a distance. Instead of continuing with two groups of
                  people separated by centuries of animosity and suspicion, he
                  created a new kind of human being, a fresh start for
                  everybody. Christ brought us together through his death on the
                  cross.”
                </p>
              </div>
              <div className="col-md-5">
                {" "}
                <div className="col-md-12">
                  {" "}
                  <iframe
                    width="100%"
                    height="240"
                    src="https://www.youtube.com/embed/9laqxoXfz8A"
                    title="Wellspring College Virtual Tour"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <p>
              Left to our own power none of us loves, honors, or respects God or
              others as we should. Economic, cultural, and racial differences
              often become showcases for the ugliness of sin. However, the
              Gospel shows us a better way. It calls out and kills this sin and
              in its place raises up and empowers a new kind of life which
              delights in God and willingly sacrifices for the good of others.
              The Gospel allows us to see our economic, cultural, and racial
              differences not as reasons to divide but as opportunities to
              celebrate the goodness and grace of our God.
            </p>

            <h6>
              Second, we believe in the value and dignity of every person.
            </h6>
            <div className="col-md-12 flexy">
              <div className="col-md-8">
                <p>
                  James 2:8-9: “You do well to obey the Scriptures: “Love others
                  as you love yourself.” But if you play up to these so-called
                  important people, you go against the Rule and stand convicted
                  by it. You can’t pick and choose in these things, specializing
                  in keeping one or two things in God’s law and ignoring
                  others.”
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
