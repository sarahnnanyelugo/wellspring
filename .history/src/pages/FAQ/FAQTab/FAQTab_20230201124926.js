import "./_faq-tab.scss";

import Admin from "../../../assets/admin2.png";
import { TabForm } from "./Form/Form";

export const FAQTab = () => {
  return (
    <>
      <div id="faq-tab-container">
        <div class="tab-wrap">
          <p>Divisional Notification of Transfer*</p>

          <input type="radio" id="tab1" name="tabGroup1" class="tab" />
          <label for="tab1" className="">
            I am not looking to transfer divisions at this time.
          </label>

          <input type="radio" id="tab2" name="tabGroup1" class="tab" />
          <label for="tab2" className="">
            I am interested in transferring divisions.
          </label>

          <div class="tab__content"></div>
          <div class="tab__content">
            <div className="info mt3 mb6">
              <center>
                <h3>Transfer Details</h3>
              </center>
            </div>
            <p>
              Thank you for choosing to join us for a TFA Experience! Please
              tell us about yourself and your family below, so that we can best
              serve your needs. Our Admissions Team will be contacting you
              shortly with more information. We look forward to meeting you
              soon!
            </p>

            <TabForm />
          </div>
        </div>
        <center>
          <button>Submit Form</button>
        </center>
      </div>
    </>
  );
};
