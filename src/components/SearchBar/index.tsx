interface DataPeople {
    skinColors?: []
    eyeColors: []
    method: any
}

function SearchBar(props: DataPeople){
    return (
        <div>
            <select
                onChange={e => props.method(e.target.value)}
            >
                {props.eyeColors.map((color, i) => {
                    return (
                        <option key={i} value={color}>
                            {color}
                        </option>
                    )
                })} 
            </select>
        </div>
    )
}

export default SearchBar