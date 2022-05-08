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
        <Routes>
          <Route exact path='/buttons' element={<Button />}></Route>
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
