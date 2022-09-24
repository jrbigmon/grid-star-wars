import TableDataPeople from "./TableDataPeople"
import TableHeaderPeople from "./TableHeaderPeople"
import starWarsApi from "../../services/starwarsApi"
import { useState, useEffect } from "react"
import Button from "../Button"
import SearchBar from "../SearchBar"

interface DataPeople {
  name: string
  height: string
  mass: string 
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: []
  species: []
  vehicles: []
  starships: []
}

function TablePeoples() {
  const [peoples, setPeoples] = useState<DataPeople[]>([])
  const [page, setPage] = useState<string>('people')
  const [next, setNext] = useState<string>('')
  const [previous, setPrevious] = useState<string>('')
  const [eyeColors, setEyeColors] = useState<[]>([])
  const [eyeColor, setEyeColor] = useState<string>('')

  async function getPeoples() {
    const response = await starWarsApi.get(`${page}`)
    const peoples = response.data.results
    if(eyeColor === '') {
      return setPeoples(peoples)
    } else {
      const peoplesWithFilter = peoples.filter((people: DataPeople) => {
        if(people.eye_color === eyeColor) return people
      })
      setPeoples(peoplesWithFilter)
    }
    
  }
  async function getNextAndPrevius() {
    const response = await starWarsApi.get(`${page}`)
    setNext(response.data.next)
    setPrevious(response.data.previous)
  }
  async function getEyeColors() {
    const response = await starWarsApi.get(`${page}`)
    const eyeColors = response.data.results.map((people: DataPeople) => {
      return people.eye_color
    })
    setEyeColors(eyeColors)
  }

  useEffect(() => {
    getPeoples()
    getNextAndPrevius()
    getEyeColors()
  }, [page, eyeColor])


  return (
    <div className="flex justify-center flex-col">
      <SearchBar 
        eyeColors={eyeColors}
        method={setEyeColor}
      />
      <table className="table-fixed">
        <thead>
          <TableHeaderPeople />
        </thead>
        <tbody>
          {peoples.map((people, i) => {
            return (
              <TableDataPeople
                key={i}
                name={people.name}
                height={people.height}
                mass={people.mass}
                hairColor={people.hair_color}
                skinColor={people.skin_color}
                eyeColor={people.eye_color}
                birthYear={people.birth_year}
                gender={people.gender}
                homeworld={people.homeworld}
                films={people.films}
                species={people.species}
                vehicles={people.vehicles}
                starships={people.starships}
              />
            )
          })}
        </tbody>
      </table>

      <div className="flex justify-center">
        <Button 
          text={'Previus'}
          execute={() => {
            previous !== null ? setPage(previous) : ''
          }}
        />
        <Button 
          text={'Next'} 
          execute={() => {
            next !== null ? setPage(next) : ''
          }} 
        />
      </div>

    </div>
  );
}

export default TablePeoples
