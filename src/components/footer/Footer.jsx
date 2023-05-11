import './Footer.scss'
import ElementFooter from './Element';
import ImagesLinks from "./ImagesLinks";


const Footer = (props) => {
    return (
        <footer>
            <section className="footerSectionOne">
                <div className="footerSectionOneOne">
                    <h3>{props.footerElementsToProps[0].title}</h3>
                    {/*<a href ={props.footerElementsToProps[0].link1}><img src={props.footerElementsToProps[0].img1}/></a>*/}
                    {/*<a href ={props.footerElementsToProps[0].link2}><img src={props.footerElementsToProps[0].img2}/></a>*/}
                    {/*<a href ={props.footerElementsToProps[0].link3}><img src={props.footerElementsToProps[0].img3}/></a>*/}
                    {
                        props.footerElementsToProps.map(element =>
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
                    <h3>{props.footerElementsToProps[1].title}</h3>
                    <p>{props.footerElementsToProps[1].email}</p>
                    <p>{props.footerElementsToProps[1].phone}</p>
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