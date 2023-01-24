import Table from "react-bootstrap/Table";
const data = [
  { level: "Anom", tuition: "Male" },
  { level: "Anom", tuition: "Male" },
  { level: "Anom", tuition: "Male" },
  { level: "Anom", tuition: "Male" },
  { level: "Anom", tuition: "Male" },
  { level: "Anom", tuition: "Male" },
  { level: "Anom", tuition: "Male" },
  { level: "Anom", tuition: "Male" },
  { level: "Anom", tuition: "Male" },
  { level: "Anom", tuition: "Male" },
];

function FeesTable() {
  return (
    <Table striped>
      {" "}
      <thead>
        <tr>
          <th>Grade Level </th>
          <th>Tuition</th>
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
