import "./_fee-navigation.scss";
import Blue from "../../../../assets/blue.png";
import { Link } from "react-router-dom";

const data1 = ["", "", "", "1st Activity Fee", "2nd Activity Fee"];
export const FeeNavigation = (props) => {
  const listItems = data1.map((fee) => (
    <li>
      <img className="col-md-12 dot mr1" src={Blue} alt="Scholar" />
      <Link> {fee}</Link>
    </li>
  ));
  return (
    <>
      <div className="fee-navigation-container">
        {" "}
        <ul className="list-unstyled">
          <li>
            <Link className="fee-links" to={"#"}>
              {props.list1}
            </Link>{" "}
            <Link className="fee-links" to={"#"}>
              {props.list1}
            </Link>{" "}
            <Link className="fee-links" to={"#"}>
              {props.list1}
            </Link>{" "}
            <Link className="fee-links" to={"#"}>
              {props.list1}
            </Link>{" "}
            <Link className="fee-links" to={"#"}>
              {props.list1}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
