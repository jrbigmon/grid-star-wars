interface DataPeople {
    methodFilms: any
}

function QuantityFilmsFilter(props: DataPeople){
    return (
        <div className="mb-5 flex flex-col justify-center w-max mx-4">
            <label htmlFor="quantityFilms" className="block text-[#FFDF00] font-black">Maior que:</label>
            <input
                className="bg-slate-500 text-white w-[100px] rounded-sm"
                id="quantityFilms"
                type='number'
                onChange={e => props.methodFilms(e.target.value)}
            />
        </div>
    )
}

export default QuantityFilmsFilter