interface DataPeople {
    eyeColors: []
    methodEye: any
}

function ColorEyesFilter(props: DataPeople){
    return (
        <div className="mb-5 flex flex-col justify-center w-max mx-4">
            <label htmlFor="eyeColors" className="block text-[#FFDF00] font-black">Cor dos olhos</label>
            <select
                className="bg-slate-500 text-white w-full rounded-sm overflow-hidden"
                id="eyeColors"
                onChange={e => props.methodEye(e.target.value)}
            >
                <option value="">Todos</option>
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

export default ColorEyesFilter