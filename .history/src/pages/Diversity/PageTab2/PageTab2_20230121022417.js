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
          <input type="radio" id="tab3" name="tabGroup1" class="tab" checked />
          <label for="tab3" className="cool-link">
            Historical Background
          </label>
          <input type="radio" id="tab4" name="tabGroup1" class="tab" checked />
          <label for="tab4" className="cool-link">
            Diversity Task Force
          </label>{" "}
          <input type="radio" id="tab5" name="tabGroup1" class="tab" checked />
          <label for="tab5" className="cool-link">
            Divisional Diversity Committees
          </label>
          <div class="tab__content">
            <p>
              Since The First Academy started in 1987, the school has embraced
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
          <div class="tab__content">2</div>
          <div class="tab__content">333333333333333</div>
        </div>
      </div>
    </>
  );
};
