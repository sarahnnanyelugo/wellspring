import './_app-modal.scss';


import React, { useEffect, useRef, useState } from "react";


export const AppModal =()=> {
    const [showActive, setShowActive] = useState(false);
    const modalContainer = useRef(null);
    const bodyTag = useRef(null);

    useEffect(() => {
       modalContainer.removeAttr("class").addClass('two');
       document.body.addClass("modal-active");
       modalContainer.click(function () {
         $(this).addClass("out");
         $("body").removeClass("modal-active");
       });
    });

  return (
    <>
      <div className="col-md-12 my-app-modal-container">
        <div ref={modalContainer}>
          <div class="modal-background">
            <div class="modal">
              <h2>I'm a Modal</h2>
              <p>Hear me roar.</p>
              <svg
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
              </svg>
            </div>
          </div>
        </div>
        <div class="content">
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
