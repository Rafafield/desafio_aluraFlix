import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import ImagemGrid from './componentes/ImagemGrid/ImagemGrid'; 
import Rodape from './componentes/Rodape/Rodape';
import React from "react";
import AddVideoPage from './Paginas/AddVideoPage/AddVideoPage';

function App() {
  return (
    <Router>
      <Banner />
      <Cabecalho />
      <Routes>
        {}
        <Route path="/" element={<ImagemGrid />} />
        
        {}
        <Route path="/adicionar-video" element={<AddVideoPage />} />
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;
