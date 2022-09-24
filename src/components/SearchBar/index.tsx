interface DataPeople {
    skinColors?: []
    eyeColors: []
}

function SearchBar(props: DataPeople){
    return (
        <div>
            <select>
                {props.eyeColors.map((color, i) => {
                    return (
                        <option key={i} value={color}>{color}</option>
                    )
                })} 
            </select>
        </div>
    )
}

export default SearchBar