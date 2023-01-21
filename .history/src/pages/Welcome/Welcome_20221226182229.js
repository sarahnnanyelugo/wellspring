import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

export const Welcome =()=>{
    return (
      <>
        <div className="col-md-12 page-container">
          <div className="col-md-12 page-top flexy">
            <div>
              <h1 className="page-header">Welcome</h1>

              <div className="" style={{ marginTop: "-30px" }}>
                {" "}
                <Breadcrum page1="About" currentPage="Welcome" />
              </div>
            </div>
            <div className="flexy">
              <Link to={"/contact"}>
                {" "}
                <button>Previous</button>
              </Link><Link to={"/contact"}>
                {" "}
                <button>Next</button>
              </Link>
            </div>
          </div>
          <div className="page-background">&nbsp;</div>
        </div>
      </>
    );
}