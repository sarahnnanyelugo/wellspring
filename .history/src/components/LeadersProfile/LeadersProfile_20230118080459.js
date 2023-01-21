import './_leaders-profile.scss'

import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useRef, useEffect } from "react";




export const LeadersProfile = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return <></>;
};