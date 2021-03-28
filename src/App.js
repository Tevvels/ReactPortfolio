import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import portfolio from './pages/portfolio';
import resume from './pages/resume';
import Contact from './pages/contact';
import about from './pages/about';

function App() {
  return (
    <Router>
      <div className="App">

      <Navbar />
     
      <Wrapper />
        
        <Route exact path= "/" component={about} />
        <Route exact path="/portfolio" component={portfolio} />
        <Route exact path="/resume" component={resume} />
        <Route exact path="/Contact" component={Contact} />
        
      <Footer />
    </div>
    </Router>

  );
}

export default App;
