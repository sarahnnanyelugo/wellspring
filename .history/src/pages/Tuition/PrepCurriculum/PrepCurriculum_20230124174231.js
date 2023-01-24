import "./_prep-curriculum.scss";
export const PrepCurriculum = () => {
  return (
    <>
      <div className="prep-container mt5">
        <div className="col-md-12 flexy">
          {/* <div className="col-md-1">&nbsp;</div> */}
          <div className="col-md-3 prep-icon flexy mt4">
            <span>
              <i class="icofont-trophy"></i>
            </span>
            <ul className="list-unstyled list-inline col-md- mt6">
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
            </ul>
          </div>

          <div className="col-md-9 prep-box mt3">
            <p>
              Our college preparatory curriculum starts building a solid
              foundation in elementary school and culminates in high school
              students taking dual enrollment, Advanced Placement, and
              concurrent courses.
            </p>
          </div>
        </div>{" "}
        <div className="col-md-12 flexy">
          {/* <div className="col-md-1">&nbsp;</div> */}

          <div className="col-md-9 prep-box mt3">
            <p>
              Our college preparatory curriculum starts building a solid
              foundation in elementary school and culminates in high school
              students taking dual enrollment, Advanced Placement, and
              concurrent courses.
            </p>
          </div>
          <div className="col-md-3 prep-icon2 flexy mt4 mr7">
            <ul className="list-unstyled list-inline col-md- mt6">
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
            </ul>
            <span>
              <i class="icofont-trophy"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
