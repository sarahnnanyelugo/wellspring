import { Link, NavLink } from "react-router-dom";

export const YellowAppButton = (props) => {
  return (
    <>
      <Link to={buttonUrl}>
        <button>{props.text}</button>
      </Link>
    </>
  );
};
