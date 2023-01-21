import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";

export const Welcome = () => {
  return (
    <>
      <div classNameName="col-md-12 page-container flexy">
        <div classNameName="col-md-3">&nbsp;</div>
        <div classNameName="col-md-6 ">
          <div classNameName="col-md-12 page-top flexy">
            <div>
              <h1 classNameName="page-header">Welcome</h1>

              <div classNameName="" style={{ marginTop: "-30px" }}>
                {" "}
                <Breadcrum page1="About" currentPage="Welcome" />
              </div>
            </div>
            <div classNameName="col-md-7">&nbsp;</div>
            <div classNameName="flexy navigations">
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
      <div classNameName="col-md-12 flexy page-background">
        <div classNameName="col-md-2">&nbsp;</div>
        <div classNameName=" col-md-8">
          <img classNameName="col-md-12 banner" src={Banner} alt="Scholar" />

          <div id="demo">
            <div classNameName="wrapper">
              <div classNameName="content">
                <ul>
                  <div classNameName="accordion col-md-12">
                    <section className="accordion-item">
                      <h6>Section 1</h6>
                      <div className="accordion-item-content">
                        <p>Content for section 1</p>
                      </div>
                    </section>
                    <section className="accordion-item">
                      <h6>Section 2</h6>
                      <div className="accordion-item-content">
                        <p>Content for section 2</p>
                      </div>
                    </section>
                    <section className="accordion-item ">
                      <h6>Section 3</h6>
                      <div className="accordion-item-content">
                        <p>Content for section 3</p>
                        <p>This is my default state.</p>
                      </div>
                    </section>
                    <section className="accordion-item">
                      <h6>Section 4</h6>
                      <div className="accordion-item-content">
                        <p>Content for section 4</p>
                      </div>
                    </section>
                  </div>
                </ul>
              </div>
              <div classNameName="parent">
                <h5>
                  <span>
                    {" "}
                    <i className="icofont-globe"></i>
                  </span>
                  Explore This Section
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
