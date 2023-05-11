import './SectionSix.scss'

const SectionSix = (props) => {
    return (
        <section className= "sectionSix">
            <h2>Types of Videos</h2>
            <div>
                <div className="sectionSixInfoEl">
                    <h3>{props.sectionSixData[0].title}</h3>
                    <span>{props.sectionSixData[0].description}</span>
                    <button>Get a Quote</button>
                </div>
                <video src = {props.sectionSixData[0].link} controls></video>
            </div>
            <div>
                <video src = {props.sectionSixData[1].link} controls></video>
                <div className="sectionSixInfoEl">
                    <h3>{props.sectionSixData[1].title}</h3>
                    <span>{props.sectionSixData[1].description}</span>
                    <button>Get a Quote</button>
                </div>
            </div>
            <div>
                <div className="sectionSixInfoEl">
                    <h3>{props.sectionSixData[2].title}</h3>
                    <span>{props.sectionSixData[2].description}</span>
                    <button>Get a Quote</button>
                </div>
                <video src = {props.sectionSixData[2].link} controls></video>
            </div>
            <div>
                <video src = {props.sectionSixData[3].link} controls></video>
                <div className="sectionSixInfoEl">
                    <h3>{props.sectionSixData[3].title}</h3>
                    <span>{props.sectionSixData[3].description}</span>
                    <button>Get a Quote</button>
                </div>
            </div>
        </section>
    )
}

export default SectionSix;