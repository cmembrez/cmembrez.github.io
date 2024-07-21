import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="Nav">
                <div className="Bars" />

                <div className="NavMenu">
                    <Link className="NavLink" to="/home">
                        Home
                    </Link>
                    <Link className="NavLink" to="/portfolio">
                        Portfolio
                    </Link>
                    <Link className="NavLink" to="/aboutMe">
                        About Me
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;