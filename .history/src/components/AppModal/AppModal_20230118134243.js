import './_app-modal.scss';


import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



export const AppModal =()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-12 my-app-modal-container">
        {/* <div id="modal-container">
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
        </div> */}

        <a class="modal-open" href="#modal">
          Click To Open Regular Modal
        </a>

        <a class="modal-open" href="#modal-tabbed">
          Click To Open Tabbed Modal
        </a>

        <div class="modal" id="modal">
          <div class="modal-content">
            <a href="#" class="modal-close" title="Close Modal">
              X
            </a>
            <h3>Modal Title</h3>
            <div class="modal-area">
              <p>Modal Content Here</p>
            </div>
          </div>
        </div>

        <div class="modal" id="modal-tabbed">
          <div class="modal-content">
            <a href="#" class="modal-close" title="Close Modal">
              X
            </a>
            <h3>Modal Title</h3>
            <div class="modal-area">
              <p>
                Tabbed Modal tab content area must be fixed height for tab slide
                transitions, can be removed and position:absolute removed from
                .modal-tab and have variable height.
              </p>
              <input
                id="opentab1"
                type="radio"
                name="modaltabs"
                checked="checked"
              />
              <label for="opentab1">Tab 1</label>
              <input id="opentab2" type="radio" name="modaltabs" />
              <label for="opentab2">Tab 2</label>
              <input id="opentab3" type="radio" name="modaltabs" />
              <label for="opentab3">Tab 3</label>
              <ul class="tab-list">
                <li class="modal-tab tab1">
                  <p>Tab 1 Content</p>
                </li>
                <li class="modal-tab tab2">
                  <p>Tab 2 Content</p>
                </li>
                <li class="modal-tab tab3">
                  <p>Tab 3 Content</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

