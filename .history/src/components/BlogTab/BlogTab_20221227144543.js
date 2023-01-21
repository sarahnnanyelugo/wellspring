import "./_blog-tab.scss";
import { Link } from "react-router-dom";
import BlogPic1 from "../../assets/square1.png";
import Logo from "../../assets/logo2.png";
import { AppButtonBlue } from "../AppButtonBlue/AppButtonBlue";
import Button from "react-bootstrap/Button";

export const BlogTab = () => {
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
              <div className="col-md-12  blog-post">
                <small>December 16, 2022</small>
                <div className="col-md-12 flexy flexyM ">
                  <div className="col-md-4">
                    <img className="col-md-12 " src={BlogPic1} alt="Scholar" />
                  </div>
                  <div className="col-md-8">
                    <p>
                      {" "}
                      <Link to={"#"} className="link-alteration">
                        Spring Sports 2023 Tryout Information and...
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12  blog-post">
                <small>December 16, 2022</small>
                <div className="col-md-12 flexy flexyM ">
                  <div className="col-md-4">
                    <img className="col-md-12 " src={BlogPic1} alt="Scholar" />
                  </div>
                  <div className="col-md-8">
                    <p>
                      {" "}
                      <Link to={"#"} className="link-alteration">
                        Spring Sports 2023 Tryout Information and...
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12  blog-post">
                <small>December 16, 2022</small>
                <div className="col-md-12 flexy flexyM">
                  <div className="col-md-4">
                    <img className="col-md-12 " src={BlogPic1} alt="Scholar" />
                  </div>
                  <div className="col-md-8">
                    <p>
                      {" "}
                      <Link to={"#"} className="link-alteration">
                        Spring Sports 2023 Tryout Information and...
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 blog-post">
                <small>December 16, 2022</small>

                <div className="col-md-12">
                  <p>
                    {" "}
                    <Link to={"#"} className="link-alteration">
                      Spring Sports 2023 Tryout Information and...
                    </Link>
                  </p>
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
              <div className="col-md-12 blog-post">
                <small>December 16, 2022</small>

                <div className="col-md-12">
                  <p>
                    {" "}
                    <Link to={"#"} className="link-alteration">
                      Spring Sports 2023 Tryout Information and...
                    </Link>
                  </p>
                </div>
              </div>{" "}
              <div className="col-md-12 blog-post">
                <small>December 16, 2022</small>

                <div className="col-md-12">
                  <p>
                    {" "}
                    <Link to={"#"} className="link-alteration">
                      Spring Sports 2023 Tryout Information and...
                    </Link>
                  </p>
                </div>
              </div>{" "}
              <div className="col-md-12 blog-post">
                <small>December 16, 2022</small>

                <div className="col-md-12">
                  <p>
                    {" "}
                    <Link to={"#"} className="link-alteration">
                      Spring Sports 2023 Tryout Information and...
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-12  blog-post">
                <small>December 16, 2022</small>
                <div className="col-md-12 flexy flexyM">
                  <div className="col-md-4">
                    <img className="col-md-12 " src={BlogPic1} alt="Scholar" />
                  </div>
                  <div className="col-md-8">
                    <p>
                      {" "}
                      <Link to={"#"} className="link-alteration">
                        Spring Sports 2023 Tryout Information and...
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="tabby-tab">
            <input type="radio" id="tab-3" name="tabby-tabs" />
            <label for="tab-3" className="col-md-8 col-sm-4 btn2">
              Tags
            </label>
            <div className="tabby-content">
              <div className="col-md-12 flexy flexyM">
                <div>
                  <Link to={"#"}>
                    <button>Secondary</button>
                  </Link>{" "}
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
