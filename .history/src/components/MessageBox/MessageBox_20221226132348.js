import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import './_'
export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);
