import Table from "react-bootstrap/Table";

function FeesTable() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>

          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>

          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td colSpan={2}>Jacob</td>

          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default FeesTable;
