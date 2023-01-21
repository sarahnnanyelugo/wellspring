import "./_directory-tab.scss"

import Admin from "../../../assets/admin2.png";
import Principal from "../../../assets/principal.png";
import Speech from "../../../assets/speech2.png";
import { DirectoryProfile } from "../DirectoryProfile/DirectoryProfile";


export const DirectoryTab =()=>{
    return (
      <>
        <div class="directory-tab-container">
          <div class="tab-wrap">
            <
            <input
              type="radio"
              id="tab1"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab1" className="cool-link">
              All
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
              Middle School
            </label>
            <div class="tab__content">
              <div className="col-md-12 mt7">
                <h1 className="mt3">Leadership</h1>
                <div className="col-md-12 flexy mt5">
                  <div className="col-md-3 col-12">
                    <DirectoryProfile
                      profileInfo="Mr. Will Cohen was born and raised in Orlando and has been serving at The
                   First Academy since June 2012. Mr. Cohen served three years as the Assistant Director 
                   of Athletics and Assistant Baseball Coach and now serves as the Director of Athletics.
                   Mr. Cohen spent seven years at TFA as a student, graduating with The First Academy’s
                    Class of 2008. After graduation, Mr. Cohen received his Bachelor of Science in Sports
                     Administration from Samford University in Birmingham, AL. From Mr. Cohen’s experience
                      as a student and staff member; the teachers, coaches, and administrators have had and
                       continue to have an immeasurable impact on his life. He is blessed to partner with
                       elite coaches and staff to encourage our student-athletes to not only advance their
                        athletic abilities but to hold to high academic standards and continue to develop 
                        their personal relationships with Jesus Christ.

"
                      profileImg={Admin}
                      profilePortfolio="DIRECTOR OF ATHLETICS"
                      profilePortfolioInner="Director of Athletics"
                      profileQualification="PH.D"
                      profileName="Mrs Lawson Albert"
                    />
                  </div>
                  <div className="col-md-3">
                    {" "}
                    <DirectoryProfile
                      profileInfo="some cool information about a certain staff displayed here"
                      profileImg={Principal}
                      profilePortfolio="HEAD TEACHER"
                      profilePortfolioInner="Head Teacher"
                      profileQualification="MEA"
                      profileName="Mrs Lilly Sanders "
                    />
                  </div>
                  <div className="col-md-3">
                    {" "}
                    <DirectoryProfile
                      profileInfo="some cool information about a certain staff displayed here"
                      profileImg={Principal}
                      profilePortfolio="HEAD TEACHER"
                      profilePortfolioInner="Head Teacher"
                      profileQualification="MEA"
                      profileName="Mrs Lilly Sanders "
                    />
                  </div>
                  <div className="col-md-3">
                    {" "}
                    <DirectoryProfile
                      profileInfo="some cool information about a certain staff displayed here"
                      profileImg={Speech}
                      profilePortfolio="CHIEF ADMINISTRATOR"
                      profilePortfolioInner="Chief Administrator"
                      profileQualification="PH.D"
                      profileName="Ms Peter Waters"
                    />
                  </div>
                </div>{" "}
                <div className="col-md-12 flexy">
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Admin}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Admin}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Admin}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Admin}
                      alt="Scholar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="tab__content">
              <div className="col-md-12 mt7">
                <h1>Lower School</h1>
                <div className="col-md-12 flexy">
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Principal}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Principal}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Principal}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Principal}
                      alt="Scholar"
                    />
                  </div>
                </div>
              </div>{" "}
            </div>
            <div class="tab__content">
              <div className="col-md-12 mt7">
                <h1 className=" mt7">Middle School</h1>
                <div className="col-md-12 flexy mt7">
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Speech}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Speech}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Speech}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      className="col-md-11 br col-12 "
                      src={Speech}
                      alt="Scholar"
                    />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </>
    );
}