interface textButton {
    text: string
    execute?: any
}
function Button(props: textButton) {
    return (
        <button 
            className="p-2 m-2 text-black text-lg font-black bg-sky-700 hover:bg-sky-800 rounded-lg"
            onClick={props.execute}
        >
            {props.text}
        </button>
    )
}
export default Button