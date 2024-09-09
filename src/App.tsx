// import { useState } from 'react'
import './App.css'
import Home from './Pages/HomeScreen'
import About from './Pages/AboutScreen'
import Project from './Pages/ProjectScreen'
import Contact from './Pages/ContactScreen'
import { HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
