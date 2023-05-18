import './SectionSeven.scss'


const SectionEight = (props) => {
    return (
        <section className="sectionSeven">
            <h2>{props.sectionSevenData.title}</h2>
            <button>{props.sectionSevenData.description}</button>
        </section>
    )
}

export default SectionEight;