import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<LoginPage/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
