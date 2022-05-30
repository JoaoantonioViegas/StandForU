import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home.js'
import './components/pages/Home.css'
import SellCar from './components/pages/SellCar.js'
import Makeareview from './components/pages/Makeareview.js'
import Profile from './components/pages/Profile.js';
import Login from './components/pages/login.js';
import Register from './components/pages/register.js';

import Container from './components/layout/Container.js';
// import Navbar from './components/layout/Navbar.js';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div className='App'>
      <Router>
        <Container customClass ="min-height">
          <Routes> 
            <Route exact path="/" element={<Home loggedIn={loggedIn}/>} />
            <Route exact path="/sell-car" element={<SellCar loggedIn={loggedIn}/>} />
            <Route exact path="/make-review" element= {<Makeareview loggedIn={loggedIn}/>}/>
            <Route exact path="/profile" element= {<Profile setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>}/>
            <Route exact path="/login" element= {<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>}/>
            <Route exact path="/register" element= {<Register/>}/>
          </Routes>
        </Container>
      </Router>
    </div>
    
  );
}

export default App;
