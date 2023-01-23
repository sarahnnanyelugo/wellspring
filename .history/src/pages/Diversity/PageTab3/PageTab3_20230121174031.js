import "./_page-tab3.scss";

import Computer from "../../../assets/computer-room.png";
import Piano from "../../../assets/piano.png";
import Speech from "../../../assets/gallery.png";
// import { DirectoryProfile } from "../DirectoryProfile/DirectoryProfile";

export const PageTab3 = () => {
  return (
    <>
      <div class="diversity-tab-container2">
        <div class="tab-wrap">
          <input type="radio" id="tab6" name="tabGroup1" class="tab" checked />
          <label for="tab6" className="cool-link">
            Prayer for Oneness
          </label>
          <input type="radio" id="tab7" name="tabGroup1" class="tab" checked />
          <label for="tab7" className="cool-link">
            Completed Steps
          </label>{" "}
          <input type="radio" id="tab8" name="tabGroup1" class="tab" checked />
          <label for="tab8" className="cool-link">
            Inclusive Community{" "}
          </label>
          <input type="radio" id="tab9" name="tabGroup1" class="tab" checked />
          <label for="tab9" className="cool-link">
            Diversity Resources
          </label>
          <div class="tab__content">
            <h2>Do Justly, Love Mercy, Walk Humbly</h2>
            <h6></h6>
          </div>
          <div class="tab__content">
            <p>2</p>
          </div>
          <div class="tab__content">
            <p>3</p>
          </div>{" "}
          <div class="tab__content">
            <p>4</p>
          </div>
        </div>
      </div>
    </>
  );
};
