import React, { useState } from 'react';
import ExcuseGenerator from './ExcuseGenerator';
import MilkRegister from './MilkRegister';
import MilkList from './MilkList';
import './App.css';
import logo from "../assets/images/boger.png"; 

const App = () => {
  const [milkData, setMilkData] = useState([]);

  const addMilkData = (data) => {
    setMilkData((prevData) => [...prevData, data]);
  };

  return (
    <div className="app-container">
      <img src={logo} alt="Boger Logo" className="app-logo" />
      <h1 className="title">Descupator & Cadastro de Leite</h1>
      <ExcuseGenerator />
      <MilkRegister onAdd={addMilkData} />
      <MilkList data={milkData} />
    </div>
  );
};

export default App;
