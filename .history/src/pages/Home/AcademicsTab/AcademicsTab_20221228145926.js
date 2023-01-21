import './_academics-tab.scss'

import Logo from "../../../assets/logo2.png";
import { AppButtonBlue } from '../../../components/AppButtonBlue/AppButtonBlue';
import { YellowAppButton } from '../../../components/YellowAppButton/YellowAppButton';


export const AcademicsTab=()=>{
    return (
      <>
        <div className="tab-container">

          <div className="tabs33 col-md-12">
            <div className="tabby-tab">
              <input type="radio" id="tab-5" name="tabby-tabs3" checked />
              <label for="tab-5" className="col-md-8 col-sm-6 btn1">
                Student Life
              </label>
              <div className="tabby-content col-md-12">
                <h5>
                  Student Life Admissions Student life at Wellspring College is
                  a rich and vibrant experience.
                </h5>
                <p>
                  Striving to provide a well balanced spiritual, academic and
                  social well-being, students are encouraged to both serve and
                  participate in and beyond our community. With plenty of room
                  for opportunity, students can engage in over forty sports, the
                  arts, and equally many student driven clubs.
                </p>
              </div>
            </div>

            <div className="tabby-tab">
              <input type="radio" id="tab-6" name="tabby-tabs3" />
              <label for="tab-6" className="col-md-8 col-sm-6 btn2">
                Admissions
              </label>
              <div className="tabby-content">
                
              </div>
            </div>
          </div>
          <div className="tab-btn">
            {" "}
            <YellowAppButton text="LEARN MORE" />
          </div>
        </div>
      </>
    );
}