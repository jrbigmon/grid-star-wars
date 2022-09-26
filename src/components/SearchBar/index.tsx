import EyeColorsFilter from './EyeColorsFilter'
import SkinColorsFilter from './SkinColorsFilter'
import QuantityFilmsFilter from './quantityFilmsFilter'

interface DataPeople {
    skinColors: []
    eyeColors: []
    methodEye: any
    methodSkin: any
    methodFilms: any
}

function SearchBar(props: DataPeople){
    return (
        <div className='flex'>
            <SkinColorsFilter skinColors={props.skinColors} methodSkin={props.methodSkin}/>
            <EyeColorsFilter eyeColors={props.eyeColors} methodEye={props.methodEye} />
            <QuantityFilmsFilter methodFilms={props.methodFilms} />
        </div>
    )
}

export default SearchBar