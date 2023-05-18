import './SectionFour.scss'
import Element from './Element'

const SectionFour = (props) => {
    return (
        <section className="sectionFour">
            <h2>About Us</h2>
            <span>About Our Video Creation Company!</span>
            <section>
                {
                    props.sectionFourData.map(element => <Element key = {element.id} number = {element.number} title = {element.title} description = {element.description}/>)
                }
            </section>
        </section>
    )
}

export default SectionFour;