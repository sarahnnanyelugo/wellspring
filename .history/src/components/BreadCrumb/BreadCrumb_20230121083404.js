import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import './_breadcrum.scss'
export const Breadcrum=(props)=> {
  return (
    <div className="breadcrumb-container">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={"/"}>Home </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={props.pageUrl}>{props.page1}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{props.currentPage}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

