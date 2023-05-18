import SectionOne from './sectionOne/SectionOne';
import SectionTwo from './sectionTwo/SectionTwo';
import SectionThree from './sectionThree/SectionThree';
import SectionFour from './sectionFour/SectionFour';
import SectionFive from './sectionFive/SectionFive';
import SectionSix from './sectionSix/SectionSix';
import SectionSeven from './sectionSeven/SectionSeven';
import {Route} from "react-router-dom";

const Main = (props) => {
    return (
        <main>

            {/*<Route path='/home' element={<SectionOne sectionOneData={props.section1ToProps.img}/>}/>*/}
            {/*<Route path='/client' element={<SectionTwo sectionTwoData={props.section2ToProps.images}/>}/>*/}
            {/*<Route path='/portfolio' element=<SectionThree S3Links={props.section3ToProps.links}*/}
            {/*                                            S3Images={props.section3ToProps.images}/>}/>*/}
            {/*<Route path='/aboutUs' element={<SectionFour sectionFourData={props.section4ToProps.elements}/>}/>*/}
            {/*<Route path='/whyUs' element=<SectionFive sectionFiveData={props.section5ToProps.elements}/>}/>*/}
            {/*<Route path='/videos' element={<SectionSix sectionSixData={props.section6ToProps.elements}/>}/>*/}
            {/*<Route path='/reviews' element={<SectionSeven sectionSevenData={props.section7ToProps.element}/>}/>*/}

            <SectionOne sectionOneData={props.section1ToProps.img}/>
            <SectionTwo sectionTwoData={props.section2ToProps.images}/>
            <SectionThree S3Links={props.section3ToProps.links}
                          S3Images={props.section3ToProps.images}/>
            <SectionFour sectionFourData={props.section4ToProps.elements}/>
            <SectionFive sectionFiveData={props.section5ToProps.elements}/>
            <SectionSix sectionSixData={props.section6ToProps.elements}/>
            <SectionSeven sectionSevenData={props.section7ToProps.element}/>
        </main>
    )
}


export default Main;