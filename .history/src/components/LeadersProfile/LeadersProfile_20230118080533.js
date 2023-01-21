import './_leaders-profile.scss'

import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useRef, useEffect } from "react";




export const LeadersProfile = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-12 flexy">
        <div className="col-md-4" onClick={handleShow}>
          <img className="col-md-11 " src={Admin} alt="Scholar" />
        </div>{" "}
        <div className="col-md-4" onClick={handleShow1}>
          <img className="col-md-11 " src={Admin} alt="Scholar" />
        </div>
      </div>
    </>
  );
};