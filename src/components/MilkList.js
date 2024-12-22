import React from 'react';

const MilkList = ({ data }) => {
  return (
    <div className="milk-list">
      <h2>Lista de Leite</h2>
      {data.length === 0 ? (
        <p>Nenhum dado cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Quantidade (L)</th>
              <th>Data</th>
              <th>Preço por Litro (R$)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
                <td>R$ {parseFloat(item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MilkList;
