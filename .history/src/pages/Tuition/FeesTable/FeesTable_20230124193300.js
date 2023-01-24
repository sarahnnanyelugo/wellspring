import Table from "react-bootstrap/Table";

function FeesTable() {
  return (
    <Table striped>
    
      <tbody>
        <tr>
          <td>1</td>
          <td colSpan={2}>Mark</td>

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
