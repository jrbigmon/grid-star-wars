import TableHeader from "../TableHeader";

function TableHeaderPeople() {
    return (
        <tr className="border">
          <TableHeader text={"Name"}/>
          <TableHeader text={"Height"}/>
          <TableHeader text={"Mass"}/>
          <TableHeader text={"Hair color"}/>
          <TableHeader text={"Skin color"}/>
          <TableHeader text={"Eye color"}/>
          <TableHeader text={"Birthday Year"}/>
          <TableHeader text={"Gender"}/>
          <TableHeader text={"Home world"}/>
          <TableHeader text={"Films"}/>
          <TableHeader text={"Vehicles"}/>
          <TableHeader text={"Starships"}/>
        </tr>
    )
}

export default TableHeaderPeople