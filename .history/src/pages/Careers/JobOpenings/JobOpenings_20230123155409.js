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
            <p>DEPARTMENT</p>
            <input
              type="radio"
              id="tab1"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab1" className="cool-link">
              View All
            </label>
            <input
              type="radio"
              id="tab2"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab2" className="cool-link">
              Lower School
            </label>
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
              Middle School
            </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
          Upper School
            </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
             The Classical School
            </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
         The First Hope
            </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
             Athletics
            </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
             Advancement
            </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
            Aftercare
            </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link bod">
          Arts    </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
           Library
            </label>{" "}
            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3" className="cool-link">
             FInance & human Resources
            </label>
           <div className="col-md-12 tab__content">1</div>
           <div className="col-md-12 tab__content">2</div>
           <div className="col-md-12 tab__content">3</div>
           <div className="col-md-12 tab__content">3</div>
          </div>
        </div>
      </>
    );
}