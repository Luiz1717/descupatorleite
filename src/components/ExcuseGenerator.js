// src/components/ExcuseGenerator.js
import React, { useState } from 'react';

const ExcuseGenerator = () => {
  const [excuse, setExcuse] = useState('');

  const generateExcuse = () => {
    const excuses = [
      'Eu fiquei preso no trânsito.',
      'Meu cachorro comeu meu trabalho.',
      'Perdi a noção do tempo.',
      'Fiquei sem internet.',
    ];
    const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
    setExcuse(randomExcuse);
  };

  return (
    <div className="excuse-generator">
      <h2>Gerador de Desculpas</h2>
      <button onClick={generateExcuse}>Gerar Desculpa</button>
      {excuse && <p>Desculpa: {excuse}</p>}
    </div>
  );
};

export default ExcuseGenerator;
