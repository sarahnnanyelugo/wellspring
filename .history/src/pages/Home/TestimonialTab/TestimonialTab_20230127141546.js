import "./_testimonial-tab.scss";

import Admin from "../../../assets/admin2.png";
import Principal from "../../../assets/principal.png";
import Speech from "../../../assets/speech2.png";
import { DirectoryProfile } from "../DirectoryProfile/DirectoryProfile";

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
          <label for="tab" className="cool-link">
            VIEW ALL
          </label>
          <div class="tab__content"></div>
          <div class="tab__content"></div>
          <div class="tab__content"></div>
        </div>
      </div>
    </>
  );
};
