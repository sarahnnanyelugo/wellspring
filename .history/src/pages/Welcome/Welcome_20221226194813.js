import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";

export const Welcome =()=>{
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

            <div class="accordion">
              <h5>
                <span>
                  {" "}
                  <i class="icofont-globe"></i>
                </span>
                Explore This Section
              </h5>
              <section class="accordion-item">
                <h6>Section 1</h6>
                <div class="accordion-item-content">
                  <p>Content for section 1</p>
                </div>
              </section>
              <section class="accordion-item">
                <h6>Section 2</h6>
                <div class="accordion-item-content">
                  <p>Content for section 2</p>
                </div>
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
            </div>
          </div>
        </div>
        
        <li class="dropdown dropdown-4">
          Scale
          <ul class="dropdown_menu dropdown_menu-4">
            <li class="dropdown_item-1">Item 1</li>
            <li class="dropdown_item-2">Item 2</li>
            <li class="dropdown_item-3">Item 3</li>
            <li class="dropdown_item-4">Item 4</li>
            <li class="dropdown_item-5">Item 5</li>
          </ul>
        </li>
      </>
    );
}