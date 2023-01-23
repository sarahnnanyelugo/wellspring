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
          <input type="radio" id="tab4" name="tabGroup1" class="tab" checked />
          <label for="tab4" className="cool-link">
            Prayer for Oneness
          </label>
          <input type="radio" id="tab5" name="tabGroup1" class="tab" checked />
          <label for="tab5" className="cool-link">
            Completed Steps
          </label>{" "}
          <input type="radio" id="tab6" name="tabGroup1" class="tab" checked />
          <label for="tab6" className="cool-link">
            Inclusive Community{" "}
          </label>
          <input type="radio" id="tab7" name="tabGroup1" class="tab" checked />
          <label for="tab7" className="cool-link">
           Diversity Resources
          </label>
          <div class="tab__content">
            <p>
              1
            </p>
          </div>
          <div class="tab__content">
            <p>
              The Diversity Task Force members are Clark Keator (Board Chair),
              Archbishop Allen Wiggins (Board Member), Bishop-Elect Derrick
              McRae (Board Member), Laura Eitel (Board Member), Gissel Valois
              (Director of Strategic Initiatives), and Will Cohen (Athletic
              Director). The Diversity Task Force will guide the responses of
              Wellspring in the areas of racial harmony and campus unity.
            </p>
          </div>
          <div class="tab__content">
            <p>
              <span>Lower School: </span>
              Sarah Rosario, Dean Middleton, Corey Wall, Kerry Ann Cole
            </p>{" "}
            <p>
              <span>Middle & Upper School : </span>
              Leroy Kinard, Joyce Kwak, Dave Oliver, Florence Pierre-Louis,
              Michael Timpson
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
