import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";

export const Welcome =()=>{
    return (
      <>
        <div className="col-md-12 page-container">
          <div className="col-md-12 page-top flexy">
            <div>
              <h1 className="page-header">Welcome</h1>

              <div className="" style={{marginTop:'-30px'}}>
                {" "}
                <Breadcrum page1="About" currentPage="Welcome" />
              </div>
            </div>
            <div className="flexy">
               <Link
            </div>
          </div>
          <div className="page-background">&nbsp;</div>
        </div>
      </>
    );
}