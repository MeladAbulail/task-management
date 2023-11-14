import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Bodycardtodo from './components/bodycardtodo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <hr></hr>
        <div className="content">
          <Routes>
            <Route path="/" element={<Bodycardtodo />} />
          </Routes>
        </div>
        <hr></hr>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
