interface DataPeople {
    skinColors: []
    methodSkin: any
}

function SkinColorsFilter(props: DataPeople){
    return (
        <div className="mb-5 flex flex-col justify-center w-max mx-4">
            <label htmlFor="skinColor" className="block text-[#FFDF00] font-black">Skin color</label>
            <select
                className="bg-slate-500 text-white w-full rounded-sm overflow-hidden"
                id="skinColor"
                onChange={e => props.methodSkin(e.target.value)}
            >
                <option value="">All</option>
                {props.skinColors.map((color, i) => {
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

export default SkinColorsFilter