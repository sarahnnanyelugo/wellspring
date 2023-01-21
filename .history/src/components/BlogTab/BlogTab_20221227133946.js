import './_blog-tab.scss'

import Logo from "../../assets/logo2.png";
import { AppButtonBlue } from '../AppButtonBlue/AppButtonBlue';


export const BlogTab=()=>{
    return (
      <>
        <div className="blog-tab-container">
          <div className="tabs col-md-12">
            <div className="tabby-tab">
              <input type="radio" id="tab-1" name="tabby-tabs" checked />
              <label for="tab-1" className="col-md-8 col-sm-4 btn1">
                Latest
              </label>
              <div className="tabby-content col-md-12">
                <small>December 16, 2022</small>
                <div className="col-md-12 flexy flexy">
                  Striving to provide a well balanced spiritual, academic and
                  social well-being, students are encouraged to both serve and
                  participate in and beyond our community. With plenty of room
                  for opportunity, students can engage in over forty sports, the
                  arts, and equally many student driven clubs.
                </div>
              </div>
            </div>
            <div className="tabby-tab">
              <input type="radio" id="tab-2" name="tabby-tabs" />
              <label for="tab-2" className="col-md-8 col-sm-4 btn2">
                Popular
              </label>
              <div className="tabby-content">
                <h5>Make your first choice the right choice.</h5>
                <p>tab2</p>
              </div>
            </div>{" "}
            <div className="tabby-tab">
              <input type="radio" id="tab-3" name="tabby-tabs" />
              <label for="tab-3" className="col-md-8 col-sm-4 btn2">
                Tags
              </label>
              <div className="tabby-content">
                <h5>tab3</h5>
                <p>
                  Few decisions have the lasting impact on your child as that of
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}