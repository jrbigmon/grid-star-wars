import TableDataPeople from "./TableDataPeople";
import TableHeaderPeople from "./TableHeaderPeople";

function TablePeoples() {
  return (
    <table className="table-fixed">
      <thead>
        <TableHeaderPeople />
      </thead>
      <tbody>
        <TableDataPeople />
      </tbody>
    </table>
  );
}

export default TablePeoples
