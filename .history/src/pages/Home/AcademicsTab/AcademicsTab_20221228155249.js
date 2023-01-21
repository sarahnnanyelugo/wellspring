import './_academics-tab.scss'

import Logo from "../../../assets/logo2.png";
import { AppButtonBlue } from '../../../components/AppButtonBlue/AppButtonBlue';
import { YellowAppButton } from '../../../components/YellowAppButton/YellowAppButton';


export const AcademicsTab=()=>{
    return (
      <>
        <div className="academic-tab-container">
          <div className="flexy">
            <div className="col-md-2">&nbsp;</div>
            <div className="about-us-after"></div>
          </div>
          <div className="tabs33 col-md-12">
            <div className="tabby-tab">
              <input type="radio" id="tab-5" name="tabby-tabs3" checked />
              <label for="tab-5" className="col-md-8 col-sm-6 btn1">
                Upper
              </label>
              <div className="tabby-content col-md-12"></div>
            </div>
            <div className="tabby-tab">
              <input type="radio" id="tab-6" name="tabby-tabs3" checked />
              <label for="tab-6" className="col-md-8 col-sm-6 btn2">
                Middle
              </label>
              <div className="tabby-content col-md-12"></div>
            </div>
            <div className="tabby-tab">
              <input type="radio" id="tab-7" name="tabby-tabs3" checked />
              <label for="tab-7" className="col-md-8 col-sm-6 btn3">
                Lower
              </label>
              <div className="tabby-content col-md-12"></div>
            </div>

            <div className="tabby-tab">
              <input type="radio" id="tab-8" name="tabby-tabs3" />
              <label for="tab-8" className="col-md-8 col-sm-6 btn4">
                Classical
              </label>
              <div className="tabby-content"></div>
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