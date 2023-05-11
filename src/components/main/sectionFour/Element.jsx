
const Element = (props) => {
    return (
        <div className="sectionFourElement">
            <h2>{props.number}</h2>
            <p>{props.title}</p>
            <span>{props.description}</span>
        </div>
    )
}

export default Element;

