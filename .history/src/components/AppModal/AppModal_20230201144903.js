import "./_app-modal.scss";

import ModalImg from "../../assets/read2.png";
import SampleLogo from "../../assets/wellspring.png";

import React, { useEffect, useRef, useState } from "react";

export const AppModal = () => {
  const [showActive, setShowActive] = useState(false);
  const modalContainer = useRef(null);
  const bodyTag = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // modalContainer.addClass("two");
      // document.body.addClass("modal-active");
      setShowActive(true);
      // modalContainer.click(function () {
      // setShowActive(false);
      // this.addClass("out");
      // document.body.removeClass("modal-active");
      // });
    }, 2000);
  }, []);
  const setThisShowActive = () => {
    setShowActive(!showActive);
  };
  return (
    <>
      <div
        className={`col-md-2 my-app-modal-container ${
          showActive ? "modal-active" : ""
        }`}
      >
        <div
          ref={modalContainer}
          className={`col-md-12 ${showActive ? "two" : ""}`}
          id="modal-container"
        >
          <div className="modal-background col-md-12">
            <button onClick={setThisShowActive} className="close-btn">
              <i class="icofont-close"></i>
            </button>

            <div className="modal col-md-10">
              <div className="col-md-12 flexy">
                <div className="col-md-7 img1 ">
                  {" "}
                  <img className="col-md-12 " src={ModalImg} alt="Scholar" />
                </div>
                <div className="col-md-4 img2">
                  <div className="col-md-12 col-12 ">
                    {" "}
                    <img
                      className="col-md-12  mt6 mb1"
                      src={SampleLogo}
                      alt="Scholar"
                    />
                    <h5>We Love WELLSPRING COLLEGE!</h5>
                    <h3>
                      <strong>Admissions Open House</strong>
                    </h3>
                    <p>
                      Explore all that Wellspring College has to offer on
                      February 22.
                    </p>
                    <button className="rsvp-btn">RSVP TODAY</button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
