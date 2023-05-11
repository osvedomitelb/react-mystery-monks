import './Header.scss'


const Header = (props) => {
    return (
        <header className="headerSection">
            <img src={props.headerLogoToProps} alt="logo"/>
            <nav>
                {
                    props.headerLinksToProps.map(el => <a  href={el.link} key = {el.id}>{el.name}</a>)
                }
            </nav>
            <button>Get a Quote</button>
        </header>
    )
}

export default Header;