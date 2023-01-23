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
           <p>The First Academy is committed to the health, safety, and wellness of our school community. The following TFA Health Protocols will continue to be implemented throughout the entire campus (visitors, team members, students, etc).

</p>
           <ul>
            <li>If you are not feeling well (cough, sore throat, vomiting, etc), please stay home and follow your health provider’s recommendations, as needed. You can return to campus after being symptom-free and fever-free for 24 hours without the use of fever-reducing medicine.</li>
            <li>If you are experiencing a fever, as defined by a reading above 100.4 degrees Fahrenheit, please stay home and follow your health provider’s recommendations, as needed. You can return to campus after being fever-free for 24 hours without the use of fever-reducing medicine.</li>
            <li>If you are diagnosed with the flu, COVID, or any other contagious virus, please follow your health provider’s recommendations. You can return to campus after being symptom-free and fever-free for 24 hours without the use of fever-reducing medicine.</li>
            <li>If a member of your household or a close contact has been diagnosed with the flu, COVID, or any other contagious virus, please monitor your health, keep a distance from the sick individual, and follow your health provider’s recommendations, as needed. 
              You are not required to stay home unless you begin to not feel well/start experiencing symptoms.</li>
            </ul>
            <p>For health-related questions, please contact our clinic at <Link to={"/"} className="link-alteration">clinic@thefirstacademy.org.</Link>

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
          </div>
          <div class="tab__content">
            <h2>Fostering an Inclusive Community</h2>
            <p>
              “The First Academy is committed to providing an inclusive
              community that celebrates God’s design and equips adult and
              student leaders to be relationship builders. We want our Living
              Curriculum Influencers and students to use their diverse
              experiences, identities, abilities, and passions to reach the
              nations with the good news of Jesus Christ.”
            </p>
            <p>
              Over the last 30 years, we have grown to become an increasingly
              multicultural and economically diverse community.
            </p>
            <ul>
              <li>
                Ethnic Diversity of Students
                <ul>
                  <li>2003-04: 8.0%</li>
                  <li>2022-23: 40.0%</li>
                </ul>
              </li>
              <li>
                Ethnic Diversity of Employees
                <ul>
                  <li>2003-04: 7.4%</li>
                  <li>2019-20: 23.0%</li>
                </ul>
              </li>
              <li>
                Ethnic Diversity of Tuition Assistance Recipients
                <ul>
                  <li>2022-23: 44% white, 56% non-white</li>
                </ul>
              </li>
            </ul>
            <div className="col-md-12 flexy">
              <ul className="col-md-9">
                <li>
                  On-Going Multi-Cultural Awareness:Wellspring College provides
                  multi-cultural awareness opportunities for students and
                  faculty throughout the school year. For example, Jim Sawgrass
                  spends time with our 4th Grade classes each year to share
                  Florida Native American history, Lower School students spend
                  time illustrating Hispanic Heritage month.
                </li>
                <li>
                  January 2020:Wellspring College hosted an intimate version of
                  Beyond Colorblind (seeing the gospel through ethnicity) for
                  families at Parent University. Students participated in the
                  annual Poetry Out Loud competition, which features the poetic
                  works of a variety of diverse authors.
                </li>
                <li>
                  December 2019: Students and parents engage with the testimony
                  of Columbine survivor Craig Scott in the MS/US assemblies and
                  Parent University, Value Up. Our community explored the impact
                  of valuing the personhood of others and creating a unified and
                  healthy school culture.
                </li>
              </ul>
              <div className="col-md-3">
                {" "}
                <img className="col-md-12 " src={Square} alt="Scholar" />
              </div>
            </div>
            <ul>
              <li>
                October 2019: Faculty and Staff participated in an InterVarsity
                led workshop, Beyond Colorblind. Beyond Colorblind engages
                participants with the Gospel through race and ethnicity. It was
                designed to disciple students into conversations that will
                transform their campus, as students learn to share the Gospel
                through their ethnic stories. Integrating evangelism,
                discipleship, and reconciliation, the Beyond Colorblind workshop
                equipped our community to articulate how God is redeeming what
                is broken and highlighting what is beautiful both in their
                ethnic journey and in the world.”
              </li>
              <li>
                August 2019: All new faculty and staff completed Share Your
                Story, a cultural competence training piece focusing on using
                the gift of your ethnic story to build relationship bridges with
                others and point them toward Jesus.
              </li>
              <li>
                August 2019: 6-9th grade students explored the resource tool,
                Speak Up at School to equip users to respond to unkind/ hurtful
                language, actions, or jokes.
              </li>
              <li>
                August 2019: 10-12th grade students spent time connecting with
                one another and serving others through projects withWellspring
                College lower school, Clean the World, and Mustard Seed of
                Central Florida.
              </li>
            </ul>
            <p>
              Mustard Seed of Central Florida The mission of The Mustard Seed of
              Central Florida is to help rebuild the lives of families and
              individuals who have suffered disaster or personal tragedy by
              providing household furnishings and clothing while being
              environmentally responsible to our community.
            </p>
            <ul>
              <li>
                April 2019: Third grade students brought biographies of famous
                women and men to life in their annual Wax Museum. Students
                researched and presented work highlighting the contributions of
                a diverse set of Americans, with highlights of how their lives
                reflect God’s glory!
              </li>
              <li>
                March 2019: Students celebrated Women’s History Month through
                fun daily trivia competitions in the Upper and Middle School as
                well as hearing about the amazing contributions of women
                throughout the school year.
              </li>
              <li>
                Upper School student leaders joined students from across the
                state for the Micah 6:8 Student Leadership Conference on March
                13, 2019 at Wellspring College. Workshops equipped Christian
                student leaders with the tools to begin making a difference in
                their spheres of influence. Topics covered were poverty &
                homelessness, human trafficking & unsafe relationships, stress
                and time management, race & grace, spiritual leadership/
                discipling others, and being bridge builders across the
                political divide.
              </li>
            </ul>
          </div>{" "}
          
        </div>
      </div>
    </>
  );
};
