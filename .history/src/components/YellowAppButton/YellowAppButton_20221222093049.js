import { Link, NavLink } from "react-router-dom";
i
export const YellowAppButton = (props) => {
  return (
    <>
      <Link to={props.buttonUrl}>
        <button>{props.text}</button>
      </Link>
    </>
  );
};
