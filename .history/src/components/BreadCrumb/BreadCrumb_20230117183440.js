import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import Home from "../../assets/home.png";
import './_breadcrum.scss'
export const Breadcrum=(props)=> {
  return (
    <Breadcrumb >
      <Breadcrumb.Item href="#">
        <Link to={"/"}>
Home        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        {props.page1}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{props.currentPage}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

