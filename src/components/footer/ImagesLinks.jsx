const ImagesLinks = (props) => {
    return (
        <div>
            <a href ={props.link1}><img src={props.img1} alt="img"/></a>
            <a href ={props.link2}><img src={props.img2} alt="img"/></a>
            <a href ={props.link3}><img src={props.img3} alt="img"/></a>
        </div>
    )
}

export default ImagesLinks;