import './_academics-tab.scss'

import Logo from "../../../assets/logo2.png";
import { AppButtonBlue } from '../../../components/AppButtonBlue/AppButtonBlue';


export const AcademicsTab=()=>{
    return (
      <>
        <div className="tab-container">
          <img className="col-md-12 " src={Logo} alt="First slide" />

          <div className="tabs col-md-12">
            <div className="tabby-tab">
              <input type="radio" id="tab-1" name="tabby-tabs" checked />
              <label for="tab-1" className="col-md-8 col-sm-6 btn1">
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
              <input type="radio" id="tab-6" name="tabby-tabs" />
              <label for="tab-2" className="col-md-8 col-sm-6 btn2">
                Admissions
              </label>
              <div className="tabby-content">
                <h5>Make your first choice the right choice.</h5>
                <p>
                  Few decisions have the lasting impact on your child as that of
                  your school choice. During these formative years, life-long
                  friendships will be made, spiritual formation will take place,
                  and values will be instilled. The First Academy is here to
                  partner with you in making those days the very best that they
                  can be.
                </p>
              </div>
            </div>
          </div>
          <div className="tab-btn">
            {" "}
            <AppButtonBlue text="LEARN MORE" />
          </div>
          <div className="about-us-after"></div>
        </div>
      </>
    );
}