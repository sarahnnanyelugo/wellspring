import { useState } from "react";

import "./_year-select.scss";

const options = ["Alabama", "Alaska", "American Samoa"];

export const YearSelect = () => {
  const [selected, setSelected] = useState(options[0]);
  const submit = () => {
    console.log(selected);
  };
  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};
