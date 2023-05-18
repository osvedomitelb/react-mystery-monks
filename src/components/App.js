
import './App.css';
import Header from './header/Header.jsx'
import Main from "./main/Main";
import Footer from './footer/Footer';



const App = (props) => {
  return (
      <div className="App">
        <Header headerLinksToProps={props.data.header.links}
                headerLogoToProps={props.data.header.logo}
                headerMenuLogoToProps={props.data.header.logo2}/>

        <Main section1ToProps={props.data.section1}
              section2ToProps={props.data.section2}
              section3ToProps={props.data.section3}
              section4ToProps={props.data.section4}
              section5ToProps={props.data.section5}
              section6ToProps={props.data.section6}
              section7ToProps={props.data.section7}/>
        <Footer footerElement1ToProps = {props.data.footer.element1}
                footerElement2ToProps = {props.data.footer.element2}
                footerLinksToProps = {props.data.footer.links}/>
      </div>
  )
}

export default App;
