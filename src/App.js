import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Igra from './pages/Igra';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <Igra pokusaji={pokusaji.slice(-12).reverse()} dodajPokusaj={dodajPokusaj} />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
