import "./_fee-navigation.scss";
import Blue from "../../../../assets/blue.png";
import { Link } from "react-router-dom";

export const FeeNavigation = () => {
  const listItems = data1.map((fee) => (
    <li>
      <img className="col-md-12 dot mr1" src={Blue} alt="Scholar" />
      <Link className="fee-links"> {fee}</Link>
    </li>
  ));
  return (
    <>
      <div className="fee-navigation-container">
        {" "}
        <ul className="list-unstyled">{listItems}</ul>
      </div>
    </>
  );
};
