import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Igra from './pages/Igra';
import Navbar from './components/Navbar';
import Statistika from './pages/Statistika';

function App() {
    const [pokusaji, setPokusaji] = useState([]);
    const dodajPokusaj = (pokusaj) => {
      setPokusaji(prev => {
        return [...prev, pokusaj];
      })
    }
    return ( 
      <BrowserRouter>
      <Navbar />
        <Routes >
          <Route path = '/' element = { <Igra pokusaji = {pokusaji.slice(-12).reverse()} dodajPokusaj = { dodajPokusaj } />}/> 
          <Route path='/statistika' element={<Statistika pokusaji={pokusaji} />} />
        </Routes> 
      </BrowserRouter>
    );
}

export default App;
