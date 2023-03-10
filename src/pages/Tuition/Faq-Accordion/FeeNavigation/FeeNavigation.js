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
            {" "}
            <img className="col-md-12 dot mr1" src={Blue} alt="Scholar" />
            <Link className="fee-links" to={props.list1Url}>
              {props.list1}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <img className="col-md-12 dot mr1" src={Blue} alt="Scholar" />{" "}
            <Link className="fee-links" to={props.list2Url}>
              {props.list2}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <img className="col-md-12 dot mr1" src={Blue} alt="Scholar" />{" "}
            <Link className="fee-links" to={props.list3Url}>
              {props.list3}
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <img className="col-md-12 dot mr1" src={Blue} alt="Scholar" />
            <Link className="fee-links" to={props.list4Url}>
              {props.list4}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <img className="col-md-12 dot mr1" src={Blue} alt="Scholar" />
            <Link className="fee-links" to={props.list5Url}>
              {props.list5}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
