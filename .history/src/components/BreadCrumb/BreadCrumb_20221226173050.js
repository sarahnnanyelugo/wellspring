import Breadcrumb from "react-bootstrap/Breadcrumb";

export const Breadcrum=(props)=> {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
       {props.page1}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{props.currentPage}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

