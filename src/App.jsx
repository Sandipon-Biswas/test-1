import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NOpage from './pages/NOpage';
import Nav1 from './components/Nav1'

const App = () => {

  return (
    <> 
     <Router>
      <Nav1/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/*" element={ <NOpage/> } />
        
       </Routes>
      </Router>
    </>
  )
}

export default App
