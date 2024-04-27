import React, { useState } from 'react';

const Prizes = () => {
  const [prizes, setPrizes] = useState(['']);

  const handleInputChange = (index, event) => {
    const newPrizes = [...prizes];
    newPrizes[index] = event.target.value;
    setPrizes(newPrizes);
  };

  const handleAddPrize = () => {
    setPrizes([...prizes, '']);
  };

  return (
    <div>
      <h4 className="Prizes">Prizes</h4>
      {prizes.map((prize, index) => (
        <div key={index} className="mb-3">
          <label htmlFor={`prize-${index}`} className="form-label">Prize {index + 1}</label>
          <input
            type="text"
            id={`prize-${index}`}
            value={prize}
            onChange={(e) => handleInputChange(index, e)}
            className="form-control"
          />
        </div>
      ))}
      <button type="button" className="btn custom-btn-primary" onClick={handleAddPrize}>Add Prize</button>
    </div>
  );
};

export default Prizes;
