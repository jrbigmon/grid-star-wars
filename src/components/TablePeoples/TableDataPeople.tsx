import TableData from '../TableData'

function TableDataPeople() {
    return (
        <tr className="border">
          <TableData text={'Luke sky walker'}/>
          <TableData text={`${167}cm`}/>
          <TableData text={"75"}/>
          <TableData text={'blond'}/>
          <TableData text={'fair'}/>
          <TableData text={'blue'}/>
          <TableData text={'1967'}/>
          <TableData text={'male'}/>
          <TableData text={'Tatoine'}/>
          <TableData text={'new hope, ...'}/>
          <TableData text={'bicicreta, motocicreta'}/>
          <TableData text={'Avião teco teco, Helicóptero'}/>
        </tr>
    )
}

export default TableDataPeople