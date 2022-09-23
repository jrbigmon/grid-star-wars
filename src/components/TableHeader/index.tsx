interface Values {
    text: string
}

function TitleLine(props : Values) {
    return (
        <th className="border p-2">{props.text}</th>
    )
}

export default TitleLine