import './App.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

const App = () => {
    return(
        <>
            <Navbar />
            <div>
                <Home />
                <Portfolio />
            </div>
        </>
    )
}

export default App