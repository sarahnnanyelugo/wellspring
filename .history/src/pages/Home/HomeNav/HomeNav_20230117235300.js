export const HomeNav =()=>{
    return (
      <>
        {" "}
        <div className="flexy col-md-12 nav-list">
          <div className="col-md-4">&nbsp;</div>

          <ul className="list-inline list-unstyled">
            <li className="list-inline-item">
              <Link to="#" className="link-alteration cool-link">
                Alumni
              </Link>
            </li>
            <li className="list-inline-item cool-link">
              <Link to="#" className="link-alteration">
                Careers
              </Link>
            </li>
            <li className="list-inline-item cool-link">
              <Link to="#" className="link-alteration">
                Giving
              </Link>
            </li>
            <li className="list-inline-item cool-link">
              <Link to="#" className="link-alteration">
                News
              </Link>
            </li>
            <li className="list-inline-item cool-link">
              <Link to="#" className="link-alteration">
                Events
              </Link>
            </li>
            <li className="list-inline-item cool-link">
              <Link to="#" className="link-alteration">
                Current Families
              </Link>
            </li>
            <li className="list-inline-item cool-link">
              <Link to="#" className="link-alteration">
                Royal Store
              </Link>
            </li>
          </ul>
        </div>{" "}
        <div className="col-md-12 navbar-container">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item cool-link">
              <MenuLinks
                pageNav="ABOUT"
                page1="Welcomme"
                page1Url={"/welcome"}
                page2="Philosophy"
                page2Url={"/philosophy"}
                page3="Leadership"
                page3Url={"/leadership"}
                page4="Directory"
                page4Url={"/directory"}
                page5="Faith"
                page5Url={"/faith"}
                page6="Diversity"
                page6Url={"/diversity"}
                page7="Health & Safety"
                page7Url={"/health-diversity"}
                page8="Calendar"
                page8Url={"/calendar"}
                page9="Welcomme"
                page9Url={"careers"}
                page10="Contact Us"
                page10Url={"/contact-us"}
              />
            </li>
            <li className="list-inline-item cool-link">
              <MenuLi pageNav="ADMISSION" />
            </li>
          </ul>
        </div>
      </>
    );
}