import './SectionOne.scss';

const SectionOne = (props) => {
    return (
        <section className="sectionOne">
            <h2>Best <span>Animation</span> & <span>Video</span> Production Company</h2>
            <p>According to Forbes, a Video can boost conversion rate by 80%, and grow revenue by average 49%.</p>
            <div>
                <img src = {props.sectionOneData} alt = "sectionOneImg"/>
                <form>
                    <p>Speak to our Video Experts</p>
                    <input type = "text" placeholder = "First Name" />
                    <input type = "text" placeholder = "Last Name" />
                    <input type = "email" placeholder = "Email Address" />
                    <input type = "tel" placeholder = "Phone Number" />
                    <input type = "text" placeholder = "Requirement" />
                    <input type = "submit" value = "Get Info & Pricing" />
                </form>
            </div>
        </section>
    )
}


export default SectionOne;