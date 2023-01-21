import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import Home from "../../assets/home.png";

export const Breadcrum=(props)=> {
  return (
    <Breadcrumb style={marginTop}>
      <Breadcrumb.Item href="#">
        <Link to={"/"}>
          <img className="col-md-12 " src={Home} alt="Scholar" />
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        {props.page1}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{props.currentPage}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

