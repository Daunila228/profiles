import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BioCard from './components/BioCard';
import UserCardContainer from './components/UserCardContainer';
import Header from './components/Header';
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          
          <Route exact path="/" element={<BioCard/>} />
          <Route path='/profile/:id' element={<UserCardContainer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
