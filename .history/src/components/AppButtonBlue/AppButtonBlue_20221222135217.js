import { Link, NavLink } from "react-router-dom";
import "./_app-button-blue.scss"
export const AppButtonBlue = (props) => {
  return (
    <>
      <Link to={props.buttonUrl}>
        <button className="app-button">{props.text}</button>
      </Link>
    </>
  );
};
