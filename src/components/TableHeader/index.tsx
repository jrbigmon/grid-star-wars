interface Values {
    text: string
}

function TitleLine(props : Values) {
    return (
        <th className="border p-2 text-lg text-sky-800">{props.text}</th>
    )
}

export default TitleLine