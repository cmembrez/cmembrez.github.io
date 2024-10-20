import './Navbar.css';
import { useState } from 'react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="Nav">
                <div className="Bars" onClick={toggleMenu}>
                    &#9776; {/* the 3 lines hamburger icon */}
                </div>
                <div className={`NavMenu ${menuOpen ? "open" : ""}`}>
                    <a className="NavLink" href="#home">Home</a>
                    <a className="NavLink" href="#portfolio">Portfolio</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;