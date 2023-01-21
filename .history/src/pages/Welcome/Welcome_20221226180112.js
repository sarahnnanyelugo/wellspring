import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";

export const Welcome =()=>{
    return (
      <>
        <div className="col-md-12 page-container">
          <div className="col-md-12 page-top flexy">
            <div>
              <h1 className="page-header">Welcome</h1>
              <Breadcrum page1="About" />
            </div>
          </div>
        </div>
      </>
    );
}