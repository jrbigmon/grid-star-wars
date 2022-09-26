import EyeColorsFilter from './EyeColorsFilter'
import SkinColorsFilter from './SkinColorsFilter'
interface DataPeople {
    skinColors: []
    eyeColors: []
    methodEye: any
    methodSkin: any
}

function SearchBar(props: DataPeople){
    return (
        <div className='flex'>
            <SkinColorsFilter skinColors={props.skinColors} methodSkin={props.methodSkin}/>
            <EyeColorsFilter eyeColors={props.eyeColors} methodEye={props.methodEye} />
        </div>
    )
}

export default SearchBar