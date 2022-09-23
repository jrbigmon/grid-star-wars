import axios from 'axios'
import { useEffect, useState } from 'react'
import TableData from '../TableData'

interface DataPeople {
    name: string
      height: string
      mass: string 
      hairColor: string
      skinColor: string
      eyeColor: string
      birthYear: string
      gender: string
      homeworld: string
      films: []
      species: []
      vehicles: []
      starships: []
}

function TableDataPeople(props: DataPeople) {
    const [homewolrdName, setHomeworld] = useState('')
    
    async function gethomewoldName(){
        const response = await axios.get(props.homeworld)
        setHomeworld(response.data.name)
    }

    useEffect(() => {
        gethomewoldName()
    }, [])
    return (
        <tr className="border">
          <TableData text={props.name}/>
          <TableData text={`${props.height} cm`}/>
          <TableData text={props.mass}/>
          <TableData text={props.hairColor}/>
          <TableData text={props.skinColor}/>
          <TableData text={props.eyeColor}/>
          <TableData text={props.birthYear}/>
          <TableData text={props.gender}/>
          <TableData text={homewolrdName}/>
          <TableData text={props.films.length}/>
          <TableData text={props.vehicles.length}/>
          <TableData text={props.starships.length}/>
        </tr>
    )
}

export default TableDataPeople