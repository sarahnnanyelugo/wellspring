import { useState } from "react";



const options = [  "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
     "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
     "Oklahoma",
     "Oregon",
     "Palau",
    "Pennsylvania",
     "Puerto Rico",
     "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
     "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"];


export const StateSelect=()=>{
      const [selected, setSelected] = useState(options[0]);
  const submit = () => {
    console.log(selected);
  };
    return(<><select value={selected} 
       onChange={e => setSelected(e.target.value)}>
        
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select><button type="button" onClick={submit}>
        Submit
      </button></>)
      
}