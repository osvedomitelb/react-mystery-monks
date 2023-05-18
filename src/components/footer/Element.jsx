
const ElementFooter = (props) => {
    return (
        <ul>
            <h3>{props.title}</h3>
            <a href = "#"><li>{props.link1}</li></a>
            <a href = "#"><li>{props.link2}</li></a>
            <a href = "#"><li>{props.link3}</li></a>
            <a href = "#"><li>{props.link4}</li></a>
        </ul>
    )
}

export default ElementFooter;