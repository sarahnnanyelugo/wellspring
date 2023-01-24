import Table from "react-bootstrap/Table";
const data = [
  { level: "Three-Year-Olds (3-Day option)	", tuition: 5470 },
  { level: "Three-Year-Olds (5-Day option)	", tuition: "Male" },
  { level: "K4  (5-day option)	", tuition: "Male" },
  { level: "Transitional Kindergarten	", tuition: "Male" },
  { level: "Kindergarten	", tuition: "Male" },
  { level: "Grades 1-4	", tuition: "Male" },
  { level: "Grades 5-6	", tuition: "Male" },
  { level: "Grades 7-8	", tuition: "Male" },
  { level: "Grades 9-11	", tuition: "Male" },
  { level: "Grade 12	", tuition: "Male" },
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
