import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";

export const Welcome =()=>{
    return (
      <>
        <div className="col-md-12 page-container">
          <div className="col-md-12 page-top flexy">
            <div >
              <p className="page-header">Welcome</p>
              <Breadcrum page1="About" currentPage="Welcome"/>
            </div>
          </div>
          <div className="page-background">&nbsp;</div>
        </div>
      </>
    );
}