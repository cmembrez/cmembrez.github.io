import './App.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

const App = () => {
    return(
        <>
            <Navbar />
            <div>
                <Home />
                <Portfolio />
                <AboutMe />
            </div>
        </>
    )
}

export default App