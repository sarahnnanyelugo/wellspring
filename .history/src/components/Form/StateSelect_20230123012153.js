import { useState } from "react";



const options = ["Italy", "Spain", "Greece"];


export const StateSelect=()=>{
      const [selected, setSelected] = useState(options[0]);

    return(<><select>
        value={selected} 
       onChange={e => setSelected(e.target.value)}>
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select></>)
}