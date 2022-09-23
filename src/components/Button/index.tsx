interface textButton {
    text: string
}
function Button(props: textButton) {
    return (
        <button className="p-2 m-2 bg-slate-400 rounded-lg hover:bg-slate-500">
            {props.text}
        </button>
    )
}
export default Button