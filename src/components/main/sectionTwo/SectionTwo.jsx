import './SectionTwo.scss';
import SectionTwoImages from './SectionTwoImages';

const SectionTwo = (props) => {
    return (
        <section className="sectionTwo">
            <h2>Our Clients</h2>
            <span>You might have heard of them</span>
            <div>{
                props.sectionTwoData.map(image => <img src={image.img} alt = "img" key = {image.id} />)
                // props.sectionTwoData.map(image => <SectionTwoImages img={image.img} alt = "img" key = {image.id} />)
            }
            </div>
        </section>
    )

}
export default SectionTwo;