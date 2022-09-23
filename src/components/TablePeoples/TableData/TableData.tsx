interface Values {
    text: string
}

function Td(props: Values){
    return (
        <td className="border">{props.text}</td>
    )
}

export default Td