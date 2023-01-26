import "./_events-tab.scss";

import Admin from "../../../assets/admin2.png";

export const EventsTab = () => {
  return (
    <>
      <div id="tab-container">
        <div class="tab-wrap">
          <p>Please select an event to attend:*</p>

          <input type="radio" id="tab1" name="tabGroup1" class="tab" checked />
          <label for="tab1" className="">
            Personal Tour (On-Campus or Virtual)
          </label>

          <input type="radio" id="tab2" name="tabGroup1" class="tab" checked />
          <label for="tab2" className="">
            We Love TFA! Admissions Open House Event for Prospective Families on
            Wednesday, February 22, 2023
          </label>

          <div class="tab__content">
            <p>Please select a tour time:*</p>
            <input type="radio" id="input1" class="tab" />
            <label for="input1" className="">
              8:30am
            </label>
            <input type="radio" id="input1" class="tab" />
            <label for="input1" className="">
              8:30am
            </label>
            <input type="radio" id="input1" class="tab" />
            <label for="input1" className="">
              8:30am
            </label>
            <div className="info"></div>
          </div>
          <div class="tab__content">2</div>
        </div>
      </div>
    </>
  );
};
