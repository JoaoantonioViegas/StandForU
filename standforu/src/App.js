import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home.js'
import Buyacar from './components/pages/Buyacar.js'
import Sellacar from './components/pages/Sellacar.js'
import Makeareview from './components/pages/Makeareview.js'
import Profile from './components/pages/Profile.js';

import Container from './components/layout/Container.js';
import Navbar from './components/layout/Navbar.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Container customClass ="min-height">
      <Routes> 
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Buyacar" element={<Buyacar/>} />
        <Route exact path="/Sellacar" element={<Sellacar/>} />
        <Route exact path="/Makeareview" element= {<Makeareview/>}/>
        <Route exact path="/Profile" element= {<Profile/>}/>
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
