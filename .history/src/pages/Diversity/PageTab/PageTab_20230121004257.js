import "./_page-tab.scss"

// import Admin from "../../../assets/admin2.png";
// import Principal from "../../../assets/principal.png";
// import Speech from "../../../assets/speech2.png";
// import { DirectoryProfile } from "../DirectoryProfile/DirectoryProfile";


export const PageTab =()=>{
    return (
      <>
        <div class="diversity-tab-container">
          <div class="tab-wrap">
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
           
            
           
          
           
            
           
            <div class="tab__content">
             1
            </div>
            <div class="tab__content">
           2
            </div>
            
          </div>
        </div>
      </>
    );
}