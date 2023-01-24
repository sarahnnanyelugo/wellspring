import "./_fee-navigation.scss";
import Blue from "../../../../assets/blue.png";
import { Link } from "react-router-dom";

const data1 = [
  "K-4 Activity Fee",
  "TK Activity Fee",
  "K Activity Fee",
  "1st Activity Fee",
  "2nd Activity Fee",
];
export const FeeNavigation = () => {
  const listItems = data1.map((fee) => (
    <li>
      <img className="col-md-12 dot" src={Blue} alt="Scholar" />
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
