import './SectionFive.scss';
import './Element';
import ElementFive from "../sectionFive/Element";

const SectionFive = (props) => {
    return (
        <section className="sectionFive">
            <h2>Why Us?</h2>
            <span>Why Choose Mystery Monks As Your Video Production and Animation Company?</span>
            <section>
                {
                    props.sectionFiveData.map(element => <ElementFive key = {element.id} img = {element.img} title = {element.title} description = {element.description} />)
                }
            </section>
        </section>
    )
}

export default SectionFive;