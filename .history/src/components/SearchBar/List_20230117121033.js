import { React, useState } from "react";
import data from "./ListData.json";
[
  {
    id: 1,
    text: "Devpulse",
  },
  {
    id: 2,
    text: "Linklinks",
  },
  {
    id: 3,
    text: "Centizu",
  },
  {
    id: 4,
    text: "Dynabox",
  },
  {
    id: 5,
    text: "Avaveo",
  },
  {
    id: 6,
    text: "Demivee",
  },
  {
    id: 7,
    text: "Jayo",
  },
  {
    id: 8,
    text: "Blognation",
  },
  {
    id: 9,
    text: "Podcat",
  },
  {
    id: 10,
    text: "Layo",
  },
]; 
function List(props) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default List;
