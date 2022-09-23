import TableData from "./TableData";
import TableHeader from "./TableHeader";

function TablePeoples() {
  return (
    <table className="table-fixed">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <TableData />
      </tbody>
    </table>
  );
}

export default TablePeoples
