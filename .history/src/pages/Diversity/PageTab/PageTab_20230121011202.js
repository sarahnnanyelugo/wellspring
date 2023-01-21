import "./_page-tab.scss"

// import Admin from "../../../assets/admin2.png";
// import Principal from "../../../assets/principal.png";
// import Speech from "../../../assets/speech2.png";
// import { DirectoryProfile } from "../DirectoryProfile/DirectoryProfile";


export const PageTab =()=>{
    return (
      <>
        <div class="diversity-tab-container">
          <div class="tab-wrap">
            <input
              type="radio"
              id="tab1"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab1" className="cool-link">
              Guiding Principles
            </label>
            <input
              type="radio"
              id="tab2"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab2" className="cool-link">
              Expanded Statement
            </label>

            {/* <div className="tab-boda"></div> */}

            <div class="tab__content">
              <ul className="list-unstyled">
                <li>
                  <span>1.</span>All that we say and do with respect to race and
                  ethnicity will reflect our commitment to the Gospel of the
                  Lord Jesus Christ. Ephesians 2:19-22
                </li><li>
                  <span>2.</span>All that we say and do with respect to race and
                  ethnicity will reflect our commitment to the Gospel of the
                  Lord Jesus Christ. Ephesians 2:19-22
                </li><li>
                  <span>3.</span>All that we say and do with respect to race and
                  ethnicity will reflect our commitment to the Gospel of the
                  Lord Jesus Christ. Ephesians 2:19-22
                </li><li>
                  <span>4.</span>All that we say and do with respect to race and
                  ethnicity will reflect our commitment to the Gospel of the
                  Lord Jesus Christ. Ephesians 2:19-22
                </li><li>
                  <span>5.</span>All that we say and do with respect to race and
                  ethnicity will reflect our commitment to the Gospel of the
                  Lord Jesus Christ. Ephesians 2:19-22
                </li>
              </ul>
            </div>
            <div class="tab__content">2</div>
          </div>
        </div>
      </>
    );
}