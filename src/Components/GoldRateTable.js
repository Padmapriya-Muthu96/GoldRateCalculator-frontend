import React from 'react';

const GoldRateTable = ({ historyData }) => {
  return (
    <div className="gold-table-container">
      <table className="gold-styled-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Gold Rate (Gram)</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => {
            const parts = item.split(' Gold Rate per Gram is ');
            return (
              <tr key={index}>
                <td>{parts[0]}</td>
                <td>{parts[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GoldRateTable;
