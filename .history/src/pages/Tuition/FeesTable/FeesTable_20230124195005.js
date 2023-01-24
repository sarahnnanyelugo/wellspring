import Table from "react-bootstrap/Table";
const data = [
  { level: "Three-Year-Olds (3-Day option)	", tuition: 5470 },
  { level: "Three-Year-Olds (5-Day option)	", tuition: "Male" },
  { level: "K4  (5-day option)	", tuition: "Male" },
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
              <td>{val.level}</td>

              <td>${val.tuition}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default FeesTable;
