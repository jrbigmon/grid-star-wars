interface Values {
    text: any
}

function Td(props: Values){
    return (
        <td className="border text-lg text-center text-[#FFDF00]">{props.text}</td>
    )
}

export default Td