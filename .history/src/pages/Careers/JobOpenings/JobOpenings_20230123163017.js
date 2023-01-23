import "./_job-openings.scss";

import Computer from "../../../assets/computer-room.png";
import Piano from "../../../assets/piano.png";
import Speech from "../../../assets/gallery.png";
// import { DirectoryProfile } from "../DirectoryProfile/DirectoryProfile";

export const JobOpenings = () => {
  return (
    <>
      <div class="diversity-tab-container2">
        <div class="tab-wrap">
          <input type="radio" id="tab1" name="tabGroup1" class="tab" checked />
          <label for="tab1" className="cool-link">
            Guiding Principles
          </label>
          <input type="radio" id="tab2" name="tabGroup1" class="tab" checked />
          <label for="tab2" className="cool-link">
            Expanded Statement
          </label>{" "}
          <input type="radio" id="tab3" name="tabGroup1" class="tab" checked />
          <label for="tab3" className="cool-link">
            Guiding Principles
          </label>
          <input type="radio" id="tab2" name="tabGroup1" class="tab" checked />
          <label for="tab2" className="cool-link">
            Expanded Statement
          </label>
          <div class="tab__content">
            <p>
              Since Wellspring College started in --, the school has embraced
              students of all colors who desire a Christian school education.
              That commitment began with our founding Senior Pastor at FBO, Jim
              Henry. It continues with our current Senior Pastor, David Uth.
              Under the leadership of our Head of School, Dr. Steve Whitaker,
              Diversity Committees were created to ensure guidance through
              evolving times. Participants include board members, parents, and
              staff. The Diversity Committees review the school culture,
              curriculum, student discipline practices, Human Resources
              processes, and the school’s philosophy/position statements to
              identify areas of strength and opportunities for growth. As a
              result of their work, a wide range of diversity initiatives have
              successfully moved our school toward greater diversity and
              belonging for all stakeholders. Today, we are still growing as a
              community of Christ-followers who desire to experience Oneness in
              all that we say and do (Eph. 4:3-6). Our story is one of
              perseverance, not perfection.
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
          </div>{" "}
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
          </div>{" "}
        </div>
      </div>
    </>
  );
};
