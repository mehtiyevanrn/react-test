import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home';
import List from './component/list'

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
