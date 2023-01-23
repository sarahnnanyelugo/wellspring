import "./_page-tab2.scss";

import Computer from "../../../assets/computer-room.png";
import Piano from "../../../assets/piano.png";
import Speech from "../../../assets/gallery.png";
// import { DirectoryProfile } from "../DirectoryProfile/DirectoryProfile";

export const PageTab2 = () => {
  return (
    <>
      <div class="diversity-tab-container">
        <div class="tab-wrap">
          <input type="radio" id="tab1" name="tabGroup1" class="tab" checked />
          <label for="tab1" className="cool-link">
            Historical Background
          </label>
          <input type="radio" id="tab2" name="tabGroup1" class="tab" checked />
          <label for="tab2" className="cool-link">
            Diversity Task Force
          </label>{" "}
          <input type="radio" id="tab3" name="tabGroup1" class="tab" checked />
          <label for="tab3" className="cool-link">
            Divisional Diversity Committees
          </label>
          <div class="tab__content">1</div>
          <div class="tab__content">2</div> 
          <div class="tab__content">3</div>
        </div>
      </div>
    </>
  );
};