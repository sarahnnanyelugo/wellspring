import "./_events-tab.scss";

import Admin from "../../../assets/admin2.png";

export const EventsTab = () => {
  return (
    <>
      <div id="tab-container">
        <div class="tab-wrap">
          <ul className="list-unstyled">
            <li>
              <input
                type="radio"
                id="tab1"
                name="tabGroup1"
                class="tab"
                checked
              />
              <label for="tab1" className="cool-link">
                View All
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="tab2"
                name="tabGroup1"
                class="tab"
                checked
              />
              <label for="tab2" className="cool-link">
                Lower School
              </label>
            </li>
          </ul>

          <div class="tab__content">1</div>
          <div class="tab__content">2</div>
        </div>
      </div>
    </>
  );
};
