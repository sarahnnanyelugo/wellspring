import "./_directory-tab.scss"

import Admin from "../../../assets/admin2.png";
import Principal from "../../../assets/principal.png";
import Speech from "../../../assets/speech2.png";


export const DirectoryTab =()=>{
    return (
      <>
        <div class="directory-tab-container">
          <div class="tab-wrap">
            <input
              type="radio"
              id="tab1"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab1">Directors</label>

            <input
              type="radio"
              id="tab2"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab2">Lower School</label>

            <input
              type="radio"
              id="tab3"
              name="tabGroup1"
              class="tab"
              checked
            />
            <label for="tab3">Middle School</label>

            <div class="tab__content">
              <div className="col-md-12 mt7">
                <h1>Directors</h1>
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