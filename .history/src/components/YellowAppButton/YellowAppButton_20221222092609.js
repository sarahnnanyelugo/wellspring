import { Link, NavLink } from "react-router-dom";

export const YellowAppButton = (props) => {
  return (
    <>
      <Link to={props.buttonUrl}>
        <button>{props.text}</button>
      </Link>
    </>
  );
};
