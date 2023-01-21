import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Tab 1",
    render: () => (
      <Tab.Pane>
        <p>
          We will continue with our current drop-off and pick-up procedures for
          the 2022-2023 school year. K-Prep – 12th-grade families will continue
          using the designated carlines for student drop-off and pick-up.
          Preschool families will continue to drop off at the designated side
          entrance of Lower School.
        </p>
      </Tab.Pane>
    ),
  },
  { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];

export const VerticalTab = () =>{
    return (
      <Tab
        menu={{ fluid: true, vertical: true }}
        menuPosition="left"
        panes={panes}
      />
    );
}
 

// export default TabExampleMenuPositionRight;
