import Table from "react-bootstrap/Table";
const data = [
  { name: "Anom", gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
];

function FeesTable() {
  return (
    <Table striped>
      {" "}
      <tbody>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td colSpan={2}>{val.age}</td>
              <td colSpan={2}>{val.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default FeesTable;
