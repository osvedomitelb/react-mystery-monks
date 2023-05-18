import './Header.scss'

import {NavLink, Route, Routes} from "react-router-dom";


const Header = (props) => {
    return (
        <header className="headerSection">
            <img src={props.headerLogoToProps} alt="logo"/>
            <img className="menuIcon" src={props.headerMenuLogoToProps} alt ="menu_icon"/>
            <nav>
                {
                    props.headerLinksToProps.map(el => <a  href={el.link} key = {el.id}>{el.name}</a>)
                }
                {/*props.headerLinksToProps.map(el => <NavLink to ={el.link} ><a  href={el.link} key = {el.id}>{el.name}</a> </NavLink>)*/}

                    {/*<NavLink to = "/home">Home</NavLink>*/}
                    {/*<NavLink to = "/client">Clients</NavLink>*/}
                    {/*<NavLink to = "/portfolio">Our Portfolio</NavLink>*/}
                    {/*<NavLink to = "/aboutUs">About Us</NavLink>*/}
                    {/*<NavLink to = "/whyUs">Why Us?</NavLink>*/}
                    {/*<NavLink to = "/videos">Videos</NavLink>*/}
                    {/*<NavLink to = "/reviews">Reviews</NavLink>*/}
            </nav>
            <button>Get a Quote</button>
        </header>
    )
}

export default Header;