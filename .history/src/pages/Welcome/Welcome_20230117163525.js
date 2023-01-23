import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Banner from "../../assets/building-banner.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dot from "../../assets/blue.png";
import { AppTab } from "../../components/AppTab/AppTab";
import { BlogTab } from "./BlogTab/BlogTab";
import "./_welcome.scss";
import { Prefoooter } from "../../components/Prefooter/Prefooter";


export const Welcome = () => {
  return (
    <>
      {/* <div className="col-md-12 page-container flexy">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 ">
          <div className="col-md-12 page-top flexy">
            <div>
              <h1 className="page-header">Welcome</h1>

              <div className="breadcrum" style={{ marginTop: "-30px" }}>
                {" "}
                <Breadcrum page1="About" currentPage="Welcome" />
              </div>
            </div>
            <div className="col-md-8">&nbsp;</div>
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
      </div> */}
      <div className="col-md-12 flexy page-background">
        <div className=" col-md-12">
          <img className="col-md-12 banner" src={Banner} alt="Scholar" />
        </div>
      </div>

      <div className="page-content flexy">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-8">
          <div className="breadcrum" style={{ marginTop: "-30px" }}>
            {" "}
            <Breadcrum page1="About" currentPage="Welcome" />
          </div>
          <ul className="list-inline list-unstyled">
            <li>
              <Link to="#" className="link-alteration">
                Welcome
              </Link>
            </li>
            <li>
              <Link to="#" className="link-alteration">
                Phylosophy
              </Link>
            </li>
            <li>
              <Link to="#" className="link-alteration">
                Leadership
              </Link>
            </li>
            <li>
              <Link to="#" className="link-alteration">
                Calendar{" "}
                <span>
                  <i class="icofont-ui-play"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link to="#" className="link-alteration"></Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="prefooter-container">
        <Prefoooter />
      </div> */}
    </>
  );
};