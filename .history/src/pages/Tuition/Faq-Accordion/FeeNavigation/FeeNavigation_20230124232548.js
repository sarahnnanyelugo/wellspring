import "./_fee-navigation.scss";
import Blue from "../../../../assets/blue.png";
import { Link } from "react-router-dom";

export const FeeNavigation = () => {
  return (
    <>
      <div className="fee-navigation-container">
        {" "}
        <ul className="list-unstyled">{listItems}</ul>
      </div>
    </>
  );
};
