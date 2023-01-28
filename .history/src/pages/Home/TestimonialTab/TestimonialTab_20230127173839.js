import "./_testimonial-tab.scss";
import Principal from "../../../assets/principal2.png";
import Speech from "../../../assets/speech.png";
import Admin from "../../../assets/admin.png";
import { Testimonials } from "../../../components/Testimonials/Testimonials";

export const TestimonialTab = () => {
  return (
    <>
      <div id="testimonial-tab-container">
        <div class="tab-wrap">
          <input type="radio" id="tab3" name="tabGroup1" class="tab" checked />
          <label for="tab3" className="cool-link">
            STUDENTS
          </label>{" "}
          <input type="radio" id="tab4" name="tabGroup1" class="tab" checked />
          <label for="tab4" className="cool-link">
            PARENTS
          </label>{" "}
          <input type="radio" id="tab5" name="tabGroup1" class="tab" checked />
          <label for="tab5" className="cool-link bod">
            FACULTY STAFF
          </label>{" "}
          <input type="radio" id="tab6" name="tabGroup1" class="tab" checked />
          <label for="tab6" className="cool-link">
            ALUMNI
          </label>{" "}
          <input type="radio" id="tab7" name="tabGroup1" class="tab" checked />
          <label for="tab7" className="cool-link">
            VIEW ALL
          </label>
          <div class="tab__content">
            {" "}
            <div className="col-md-12 flexy testimonials">
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Speech}
                    testifier="name of testifier"
                    content="Wellspring College is a res students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Admin}
                    testifier="name of testifier"
                    content="The s students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Principal}
                    testifier="name of testifier"
                    content="Wellspring College is a private Christia to influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="tab__content">
            {" "}
            <div className="col-md-12 flexy testimonials">
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Principal}
                    testifier="name of testifier"
                    content="Wellspring College is a res students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Speech}
                    testifier="name of testifier"
                    content="The s students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Principal}
                    testifier="name of testifier"
                    content="Wellspring College is a private Christia to influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="tab__content">
            {" "}
            <div className="col-md-12 flexy testimonials">
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Principal}
                    testifier="name of testifier"
                    content="Wellspring College is a res students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Principal}
                    testifier="name of testifier"
                    content="The s students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Speech}
                    testifier="name of testifier"
                    content="Wellspring College is a private Christia to influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="tab__content">
            {" "}
            <div className="col-md-12 flexy testimonials">
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Principal}
                    testifier="name of testifier"
                    content="Wellspring College is a res students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Admin}
                    testifier="name of testifier"
                    content="The s students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Principal}
                    testifier="name of testifier"
                    content="Wellspring College is a private Christia to influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="tab__content">
            {" "}
            <div className="col-md-12 flexy testimonials">
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Speech}
                    testifier="name of testifier"
                    content="Wellspring College is a res students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Principal}
                    testifier="name of testifier"
                    content="The s students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <Testimonials
                    testifierImg={Admin}
                    testifier="name of testifier"
                    content="Wellspring College is a private Christia to influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life.Wellspring College is a private Christian school in Orlando, Florida, that prepares students to stand out from their peers and become leaders who influence the world through Christ-like leadership — choosing character before career, wisdom beyond scholarship, service before self, and participation as a way of life."
                  />
                </div>
              </div>
            </div>
            <Carousel data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
