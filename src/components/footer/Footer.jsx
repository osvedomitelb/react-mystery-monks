import './Footer.scss'
import ElementFooter from './Element';
import ImagesLinks from "./ImagesLinks";
import Element2Footer from "./Element2";


const Footer = (props) => {
    return (
        <footer>
            <section className="footerSectionOne">
                <div className="footerSectionOneOne">
                    <h3>{props.footerElement1ToProps.title}</h3>

                    {
                        props.footerElement1ToProps.map(element =>
                            <ImagesLinks key = {element.id}
                                         link1={element.link1} img1={element.img1}
                                         link2={element.link2} img2={element.img2}
                                         link3={element.link3} img3={element.img3}/>)
                    }
                </div>
                <div className="footerSectionOneTwo">
                    {
                        props.footerLinksToProps.map(element =>
                            <ElementFooter key = {element.id}
                                           title={element.title}
                                           link1={element.link1}
                                           link2={element.link2}
                                           link3={element.link3}
                                           link4={element.link4}/>)
                    }
                </div>
                <div className="footerSectionOneThree">
                    {
                        props.footerElement2ToProps.map(element =>
                        <Element2Footer key = {element.id}
                        title={element.title}
                        email={element.email}
                        phone={element.phone}/>)
                    }
                </div>

            </section>
            <hr/>
            <section className="footerSectionTwo">
                <span>Copyright © 2023 by Mystery Monks / All rights reserved.</span>
                <span>Terms of Service | Privacy Policy |</span>
            </section>
        </footer>
    )
}

export default Footer;