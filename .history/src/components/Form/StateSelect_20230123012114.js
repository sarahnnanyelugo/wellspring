
const options = ["Italy", "Spain", "Greece"];


export const StateSelect=()=>{
    return(<><select>
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select></>)
}