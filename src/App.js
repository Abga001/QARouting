import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, Router } from 'react-router-dom';
import Home from './Routing/Home';
import User from './Routing/Users';
import Contact from './Routing/Contact';
import Notfound from './Routing/Notfound';

function App() {
  return (

      <div className='App'>
      <BrowserRouter>
      <div>
      <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/User'>User</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>

      </ul>
      </div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Users/:id' element={<User />} />
      <Route path='/User' element={<User />} />
      <Route path='/Contact' element={<Contact />} />

      </Routes>

      </BrowserRouter>

      </div>
  );
}

export default App;