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
      <thead>
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>

              <td>{val.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default FeesTable;
