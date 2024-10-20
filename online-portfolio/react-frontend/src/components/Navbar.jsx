import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="Nav">
                <div className="Bars" />
                <div className="NavMenu">
                    <a className="NavLink" href="#home">
                        Home
                    </a>
                    <a className="NavLink" href="#portfolio">
                        Portfolio
                    </a>
                    <a className="NavLink" href="#aboutMe">
                        About Me
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;