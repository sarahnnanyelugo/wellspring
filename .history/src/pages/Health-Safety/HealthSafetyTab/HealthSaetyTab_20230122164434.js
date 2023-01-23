import "./_health-safety-tab.scss";

import Computer from "../../../assets/computer-room.png";
import Piano from "../../../assets/piano.png";
import Square from "../../../assets/ball.png";
// import { DirectoryProfile } from "../DirectoryProfile/DirectoryProfile";
import { Link } from "react-router-dom";

export const HealthSafetyTab = () => {
  return (
    <>
      <div class="health-tab-container3">
        <div class="tab-wrap">
          <input type="radio" id="tab6" name="tabGroup1" class="tab" checked />
          <label for="tab6" className="cool-link">
           Health Protocols
          </label>
          <input type="radio" id="tab7" name="tabGroup1" class="tab" checked />
          <label for="tab7" className="cool-link">
            Major Crisis Reunification Plan & Procedures
          </label>{" "}
          <input type="radio" id="tab8" name="tabGroup1" class="tab" checked />
          <label for="tab8" className="cool-link">
           Animals on Campus
          </label>
          
          <div class="tab__content">
           <p>The First Academy is committed to the health, safety, and wellness of our school community. The following Wellspring College Health Protocols will continue to be implemented throughout the entire campus (visitors, team members, students, etc).

</p>
           <ul>
            <li>If you are not feeling well (cough, sore throat, vomiting, etc), please stay home and follow your health provider’s recommendations, as needed. You can return to campus after being symptom-free and fever-free for 24 hours without the use of fever-reducing medicine.</li>
            <li>If you are experiencing a fever, as defined by a reading above 100.4 degrees Fahrenheit, please stay home and follow your health provider’s recommendations, as needed. You can return to campus after being fever-free for 24 hours without the use of fever-reducing medicine.</li>
            <li>If you are diagnosed with the flu, COVID, or any other contagious virus, please follow your health provider’s recommendations. You can return to campus after being symptom-free and fever-free for 24 hours without the use of fever-reducing medicine.</li>
            <li>If a member of your household or a close contact has been diagnosed with the flu, COVID, or any other contagious virus, please monitor your health, keep a distance from the sick individual, and follow your health provider’s recommendations, as needed. 
              You are not required to stay home unless you begin to not feel well/start experiencing symptoms.</li>
            </ul>
            <p>For health-related questions, please contact our clinic at <Link to={"/"} className="link-alteration">clinic@wellspringcollege.org.</Link>

</p>
          </div>
          <div class="tab__content">
            <p>
             Purpose: in the event of a major crisis on our school campus, the following policy and procedures will provide 
             for a safe and secure location away from the scene and enable a safe and secure transfer of the students to their
              parents or guardians.
            </p>
            <ul>
              <li>
                Students will be evacuated to a designated area, based on the crisis.

              </li>
              <li>
                Reunification Site, predetermined area based on crisis is setup by Reunification Team.

              </li>
              <li>
               Parents/guardians are notified that the students have been moved to the Reunification Site.

              </li>
              <li>
               Parents are validated and identified upon arrival.

              </li>
              <li>
               Once validated, parents and guardians will be reunited with their students.

              </li>
              <li>
                Custodial transfer to parents/guardians is documented.

              </li>
             
            </ul>
            <p><strong>Parent Expectations:</strong> Bring Identification to check in and be patient. Reunification is a process that protects both the safety and security of the students. Reunification provides for an accountable change of custody from the school to a recognized custodial parents or guardians.

</p>
<p><strong>How can you help?</strong> Stay home, stay informed and be ready to go.

</p>
          </div>
          <div class="tab__content">
            <h6>Service Animals

</h6>
            <p>
              The First Academy acknowledges its responsibility to permit students, parents/guardians, family members, employees, and community members with disabilities 
              to be accompanied by a “service animal” consistent with the Americans with Disabilities Act (ADA) on school property or at school activities.
            </p>
            <p>
              A “service animal” is an animal that is individually trained to do work or perform tasks for the benefit of assisting or accommodating a disabled person’s sensory, mental, or physical disability. The animal must be trained to engage in specific actions or tasks to assist its handler with a disability. The work or tasks performed by a service animal must be directly related to the individual’s disability. An animal whose sole function is as a pet or to provide comfort or emotional support does not qualify as a service animal under this Regulation or law.


            </p>
            <h6>All Other Animals On Campus



</h6>
            <p>
              With the exception of service animals, animals are not allowed on campus during school hours (i.e., solely for educational purposes / Gatorland) unless specifically approved by the Assistant Head of School. Many animals, while well-behaved normally, may act aggressively under the increased input of a school campus where students and adults are moving constantly. School hours are meant to include classroom periods, the period of time before and after school when students are entering and exiting the school, and during after-school activities when students are present.


            </p>
            <p>
Parents or guardians walking their animals and the student as part of the arrival or departure process must keep their animals off the school grounds. Animals remaining in vehicles while visiting the campus are not restricted except that owners should keep windows and other openings restricted to prevent children from reaching into the vehicle.

            </p>
          
         
          
       
         
          </div>{" "}
          
        </div>
      </div>
    </>
  );
};
