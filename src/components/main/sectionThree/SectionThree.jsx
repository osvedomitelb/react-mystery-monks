import './SectionThree.scss';
// import {useState} from 'react';

// function Text() {
//     return (
//         <span className="text">123</span>
//     );
// }
//
const SectionThree = (props) => {
//
//     const [isHovering, setIsHovering] = useState(false);
//
//     const handleMouseOver = () => {
//         setIsHovering(true);
//     };
//     const handleMouseOut = () => {
//         setIsHovering(false);
//     };
    return (
        <section className="sectionThree">
            <h2>Portfolio</h2>
            <span>Explore some of the work we’re especially proud of.</span>
            <nav>
                {
                    props.S3Links.map(el => <a href={el.link} key={el.id}>{el.name}</a>)
                }
            </nav>
            <div>
                {
                    props.S3Images.map(image => <img src={image.img} alt="img" key={image.id}/>)
                }
            </div>
        </section>
    )
}

export default SectionThree;