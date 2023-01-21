import './_footer.scss'


export const Footer =()=>{
    return (
      <>
        <div className="footer-container col-md-12 flexy">
          <div className="col-md-5">
            <div className="col-md-12 links-container flexy">
              <div className="col-md-6">&nbsp;</div>
              <div className="col-md-6 flexy">
                <ul className="list-unstyled">
                  <li>
                    <Link>ABOUT</Link>
                  </li>
                  <li>
                    <Link>ADMISSIONS</Link>
                  </li>
                  <li>
                    <Link>ATHLETICS</Link>
                  </li>
                  <li>
                    <Link>BLOGS</Link>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <Link>ACADEMICS</Link>
                  </li>
                  <li>ARTS</li>
                  <li>GIVING</li>
                  <li>STORE</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-logo-container col-md-2"></div>
          <div className="footer-logo-container col-md-5"></div>
        </div>
      </>
    );
}