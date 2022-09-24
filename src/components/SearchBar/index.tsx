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
            <EyeColorsFilter eyeColors={props.eyeColors} methodEye={props.methodEye} />
            <SkinColorsFilter skinColors={props.skinColors} methodSkin={props.methodSkin}/>
        </div>
    )
}

export default SearchBar