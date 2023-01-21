import { Link, NavLink } from "react-router-dom";
import "./_yellow-app-button.scss"
export const YellowAppButton = (props) => {
  return (
    <>
      <Link to={props.buttonUrl}>
        <button className="app-button-">{props.text}</button>
      </Link>
    </>
  );
};
