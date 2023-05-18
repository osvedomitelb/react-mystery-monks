
const ElementFive = (props) => {
    return (
        <div>
            <img src = {props.img} alt = "img"/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default ElementFive;