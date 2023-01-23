import "./_job-openings.scss"

import Admin from "../../../assets/admin2.png";
import Principal from "../../../assets/principal.png";
import Speech from "../../../assets/speech2.png";
import { DirectoryProfile } from "../DirectoryProfile/DirectoryProfile";


export const JobOpenings =()=>{
    return (
      <>
        <div class="job-openings-container">
          <div class="tab-wrap">
        
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link bod">
          Faculty Positions  </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
           Extended Educational Positions
            </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
            Staff Positions
            </label> 
            <input
              type="radio"
              id="tab4"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab4" className="cool-link">
Athletic Positions            </label>
           <div className="col-md-12 tab__content">1</div>
           <div className="col-md-12 tab__content">2</div>
           <div className="col-md-12 tab__content">3</div>
           <div className="col-md-12 tab__content">4</div>
          </div>
        </div>
      </>
    );
}