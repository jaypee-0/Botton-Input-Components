import React from "react";
import './App.scss'
import Navbar from "./Components/Navbar"
import Button from "./Components/Buttons"
import Input from "./Components/Input"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
      <h2 className='d-block mt-2 text-center d-md-none fw-bold'><span className='text-danger'>Dev</span>challenges.io</h2>
        <Routes>
          <Route exact path='/' element={<Button />}></Route>
          <Route exact path='/inputs' element={<Input />}></Route>
        </Routes>
      </div>
      <footer>
          <p className='text-center mt-5'>created by <a href="https://bit.ly/jaypee-github">Jaypee</a> - devChallenges.io</p>
        </footer>
    </Router>
  );
}

export default App;
