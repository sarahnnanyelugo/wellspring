import './_app-modal.scss';

import ModalImg from "../../assets/.png";

import React, { useEffect, useRef, useState } from "react";


export const AppModal =()=> {
    const [showActive, setShowActive] = useState(false);
    const modalContainer = useRef(null);
    const bodyTag = useRef(null);

    useEffect(() => {

       setTimeout(()=>{
        // modalContainer.addClass("two");
        // document.body.addClass("modal-active");
        setShowActive(true);
        // modalContainer.click(function () {
          // setShowActive(false);
          // this.addClass("out");
          // document.body.removeClass("modal-active");
        // });
       },2000)
    },[]);

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
          <div className="modal-background">
            <div className="modal col-md-12 flexy">
              <div className="col-md-7 img1">
                {" "}
                <img className="col-md-12 mb4" src={ModalImg} alt="Scholar" />
              </div>
              {/* <svg
                class="modal-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <rect
                  x="0"
                  y="0"
                  fill="none"
                  width="226"
                  height="162"
                  rx="3"
                  ry="3"
                ></rect>
              </svg> */}
            </div>
          </div>
        </div>
        <div class="content col-md-2">
          <h1>Modal Animations</h1>
          <div class="buttons">
            <div id="two" class="button">
              Revealing
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

