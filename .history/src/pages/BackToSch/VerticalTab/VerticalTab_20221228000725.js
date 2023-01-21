import React, { useState } from "react";
// import { Container, Row, Col } from "reactstrap";

import VTlist from "./VTlist";
import VTcontent from "./VTcontent";

import "./_vertical-tab.scss";

function VerticalTab(props) {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
  }

  return (
    <div className="section__Jobs-container">
      <div>
        <Col sm="3">
          <div className="section__Jobs-styledTab">
            <ul className="section__Jobs-styledTabList">
              {props.data.map((job, index) => (
                <VTlist
                  key={index}
                  onClick={btnClick}
                  data={job}
                  index={index}
                  activeTabId={activeTabId}
                />
              ))}
            </ul>
          </div>
        </Col>
        <Col sm="9">
          {props.data.map((job, index) => (
            <VTcontent
              data={job}
              key={index}
              index={index}
              activeTabId={activeTabId}
            />
          ))}
        </Col>
      </div>
      <span
        className={
          activeTabId === 0
            ? "index1-chosen"
            : activeTabId === 1
            ? "index2-chosen"
            : "index3-chosen"
        }
      >
        &nbsp;
      </span>
    </div>
  );
}

export default VerticalTab;
