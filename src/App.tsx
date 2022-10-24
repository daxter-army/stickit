// ESSENTIALS
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// PAGES
import Home from './pages/Home/Home';
import Note from './pages/Note/Note';

// DUMMY DATA
import './data/data';

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Note' element={<Note />} />
      </Routes>
    </Router>
  );
}

export default App;