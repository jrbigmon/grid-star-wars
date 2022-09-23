import Th from "./TableHeader";

function TableHeader() {
    return (
        <tr className="border">
          <Th text={"Name"}/>
          <Th text={"Height"}/>
          <Th text={"Mass"}/>
          <Th text={"Hair color"}/>
          <Th text={"Skin color"}/>
          <Th text={"Eye color"}/>
          <Th text={"Birthday Year"}/>
          <Th text={"Gender"}/>
          <Th text={"Home world"}/>
          <Th text={"Films"}/>
          <Th text={"Vehicles"}/>
          <Th text={"Starships"}/>
        </tr>
    )
}

export default TableHeader