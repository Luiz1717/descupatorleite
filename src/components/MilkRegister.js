import React, { useState } from 'react';
import './MilkRegister.css';
import logo from "../assets/images/boger.png";

const MilkRegister = ({ onAdd }) => {
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quantity || !date || !price) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    onAdd({ quantity, date, price });
    setQuantity('');
    setDate('');
    setPrice('');
  };

  return (
    <div className="milk-register">
      <img src={logo} alt="Marca" className="brand-logo" />
      <h2>Cadastro de Leite</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Quantidade (litros):
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          Data:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Preço por litro (R$):
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default MilkRegister;
