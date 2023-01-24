import "./_prep-curriculum.scss";
export const PrepCurriculum = () => {
  return (
    <>
      <div className="prep-container mt5">
        <div className="col-md-12 flexy">
          <div className="col-md-3 prep-icon">
            <span>
              <i class="icofont-trophy"></i>
            </span>
            <ul className="list-unstyled list-inline col-md-1">
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
              <li className="list-inline-item">-</li>
            </ul>
          </div>

          <div className="col-md-8 prep-box ">
            <p>
              Our college preparatory curriculum starts building a solid
              foundation in elementary school and culminates in high school
              students taking dual enrollment, Advanced Placement, and
              concurrent courses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
