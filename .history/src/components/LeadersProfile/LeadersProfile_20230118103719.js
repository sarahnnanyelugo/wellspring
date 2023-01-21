import './_leaders-profile.scss'

import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useRef, useEffect } from "react";




export const LeadersProfile = ({ name, ...props }) => {
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-12 flexy leaders-profile">
        <div className="col-md-12" onClick={handleShow}>
          <img className="col-md-11 br " src={props.profileImg} alt="Scholar" />
          <div className="profile-name ">
            <h6>{props.profilePortfolio}</h6>
          </div>
          <h4 className="mt3">{props.profileName}</h4>
          <small>{props.profileQualification}</small>
        </div>{" "}
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        placement="end"
        restoreFocus={true}
        scroll={true}
        className="backdropClassName"
        closeButton
        ref={dropdownRef}
                      className={`menu ${isActive ? "active" : "inactive"}`}
      >

        {/* <Offcanvas.Header closeButton></Offcanvas.Header> */}
        <h6 onClick={onClick}>
          <i class="icofont-ui-close"></i>
        </h6>
        <Offcanvas.Body>
          <div className="col-md-12 offcanvas-leaders-profile">
            <img className="col-md-12 " src={props.profileImg} alt="Scholar" />
            <div className="profile-portfolio ">
              <h6>{props.profilePortfolio}</h6>
            </div>
          </div>
          <div className="offcanvas-profile-name">
            <h2>{props.profileName}</h2>
            <small>{props.profileQualification}</small>
          </div>
          <p className="mt5">
            <strong>{props.profileName}</strong>,{" "}
            <em> {props.profilePortfolio}</em>
          </p>

          <p className="mt3">{props.profileInfo}</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};