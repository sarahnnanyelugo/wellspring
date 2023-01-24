import Table from "react-bootstrap/Table";
const data = [
  { name: "Anom", gender: "Male" },
  { name: "Megha", gender: "Female" },
  { name: "Subham", gender: "Male" },
];

function FeesTable() {
  return (
    <Table striped>
      {" "}
      <tbody>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td colSpan={4}>{val.name}</td>

              <td colSpan={2}>{val.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default FeesTable;
