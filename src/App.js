import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
// routes
import Login from './features/login/Login';
import Pokedex from './features/pokedex/Pokedex';
import Pokemon from './features/pokemon/Pokemon';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='pokedex/:id' element={<Pokemon />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
