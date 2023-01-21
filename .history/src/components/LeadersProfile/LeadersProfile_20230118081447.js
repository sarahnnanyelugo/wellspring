import './_leaders-profile.scss'

import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useRef, useEffect } from "react";
import Admin from "../../assets/admin.png";




export const LeadersProfile = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-12 flexy">
        <div className="col-md-12" onClick={handleShow}>
          <img className="col-md-11 " src={props.profileImg} alt="Scholar" />
          <div></div>
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
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>leader1</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         {props.profileInfo}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};