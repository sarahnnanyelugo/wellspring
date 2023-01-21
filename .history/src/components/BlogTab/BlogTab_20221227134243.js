import './_blog-tab.scss'
import { Link } from "react-router-dom";
import BlogPic1 from "../../assets/building-banner.png";
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
                <div className="col-md-12 flexy flexyM">
                  <div className="col-md-3">
                    <img
                      className="col-md-12 banner"
                      src={Banner}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-9">
                    <
                  </div>
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