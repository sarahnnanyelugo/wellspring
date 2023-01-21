import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import './_message-box.scss'
export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);
