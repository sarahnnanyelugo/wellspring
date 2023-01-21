import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";

export const Welcome = () => {
  return (
    <>
      <div className="col-md-12 page-container flexy">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-6 ">
          <div className="col-md-12 page-top flexy">
            <div>
              <h1 className="page-header">Welcome</h1>

              <div className="" style={{ marginTop: "-30px" }}>
                {" "}
                <Breadcrum page1="About" currentPage="Welcome" />
              </div>
            </div>
            <div className="col-md-7">&nbsp;</div>
            <div className="flexy navigations">
              <Link to={"/contact"}>
                {" "}
                <button>Previous</button>
              </Link>
              <Link to={"/back-to-school"}>
                {" "}
                <button>Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy page-background">
        <div className="col-md-2">&nbsp;</div>
        <div className=" col-md-8">
          <img className="col-md-12 banner" src={Banner} alt="Scholar" />

          <div className="col-md-12 flexy" style={{ height: "1000px" }}>
            <div className="col-md-9 page-content">
              <p>
                All parents want their child to attend a great school – not just
                a good school. When my wife and I moved our family to Orlando
                several years ago, we found a great school in The First Academy.
                On the first day of the new school year, I watched with
                apprehension from a second story window as my middle child
                walked onto a playground crowded with unfamiliar faces. With a
                lump in my throat, I watched as he stood alone with his hands in
                his pockets, obviously filled with uncertainty and nearly
                paralyzed by fear. What happened next told me much about what
                makes The First Academy a great school. It turns out that I
                wasn’t the only one observing. His teacher saw the worry on his
                small, furrowed brow, too. She approached my son, took him by
                the hand, and walked him toward the monkey bars. I could see her
                bend down and introduce him to several boys who were playing
                together. Within moments, those boys were welcoming my son into
                their fold, and they have since become treasured friends. That
                moment was powerful for me as I observed a great teacher in
                action. Great teachers understand that true education involves
                more than just teaching the mind – it begins with reaching the
                heart. Great teachers understand that students aren’t interested
                in finding out how much a teacher knows until they find out how
                much a teacher cares.
              </p>
            </div>

            {/* <div className="col-md-3 side-nav-container">
              <div id="side-nav">
                <div className="wrapper">
                  <div className="content">
                    <ul>
                      <div className="accordion col-md-12">
                        <section class="accordion-item">
                          <p>
                            <Link to={"#"}>All school worship</Link>
                          </p>
                        </section>
                        <section class="accordion-item">
                          <p>
                            <Link to={"#"}>Contact</Link>
                          </p>
                        </section>
                        <section class="accordion-item">
                          <p>
                            <Link to={"#"}>Divertity</Link>
                          </p>
                        </section>
                        <section class="accordion-item">
                          <p>
                            <Link to={"#"}>Contact</Link>
                          </p>
                        </section>
                        <section class="accordion-item">
                          <p>
                            <Link to={"#"}>Contact</Link>
                          </p>
                        </section>
                        <section class="accordion-item">
                          <p>
                            <Link to={"#"}>Contact</Link>
                          </p>
                        </section>
                        <section class="accordion-item">
                          <p>
                            <Link to={"#"}>Contact</Link>
                          </p>
                        </section>
                        <section class="accordion-item">
                          <p>
                            <Link to={"#"}>Contact</Link>
                          </p>
                        </section>
                        <section class="accordion-item ">
                          <h6>Section 3</h6>
                          <div class="accordion-item-content">
                            <p>Content for section 3</p>
                            <p>This is my default state.</p>
                          </div>
                        </section>
                        <section class="accordion-item">
                          <h6>Section 4</h6>
                          <div class="accordion-item-content">
                            <p>Content for section 4</p>
                          </div>
                        </section>
                        <section class="accordion-item">
                          <h6>Section 4</h6>
                          <div class="accordion-item-content">
                            <p>Content for section 4</p>
                          </div>
                        </section>
                        <section class="accordion-item">
                          <h6>Section 4</h6>
                          <div class="accordion-item-content">
                            <p>Content for section 4</p>
                          </div>
                        </section>
                        <section class="accordion-item">
                          <h6>Section 4</h6>
                          <div class="accordion-item-content">
                            <p>Content for section 4</p>
                          </div>
                        </section>
                        <section class="accordion-item">
                          <h6>Section 4</h6>
                          <div class="accordion-item-content">
                            <p>Content for section 4</p>
                          </div>
                        </section>
                      </div>
                    </ul>
                  </div>
                  <div className="parent">
                    <h5>
                      <span>
                        {" "}
                        <i class="icofont-globe"></i>
                      </span>
                      Explore This Section
                    </h5>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="side-nav2">
              <div id="demo">
                <div class="wrapper">
                  <div class="content">
                    <ul>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <Link to={"#"}>
                        <li>All school worship</li>
                      </Link>
                      <ul class="menu">
                        <li>
                          <a href="#">Parent Link</a>

                          <ul>
                            <li>
                              <a href="#">Child Link</a>
                            </li>
                            <li>
                              <a href="#">Child Link</a>
                            </li>
                            <li>
                              <a href="#">Child Link</a>
                            </li>
                            <li>
                              <a href="#">Child Link</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div class="parent">Drop Down Parent 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
