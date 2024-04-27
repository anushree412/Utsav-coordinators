import React, { useState } from 'react';

const Rules = () => {
  const [rules, setRules] = useState(['']);

  const handleInputChange = (index, event) => {
    const newRules = [...rules];
    newRules[index] = event.target.value;
    setRules(newRules);
  };

  const handleAddRule = () => {
    setRules([...rules, '']);
  };

  return (
    <div>
      <h4 className="Rules">Rules</h4>
      {rules.map((rule, index) => (
        <div key={index} className="mb-3">
          <label htmlFor={`rule-${index}`} className="form-label">Rule {index + 1}</label>
          <input
            type="text"
            id={`rule-${index}`}
            value={rule}
            onChange={(e) => handleInputChange(index, e)}
            className="form-control"
          />
        </div>
      ))}
      <button type="button" className="btn custom-btn-primary" onClick={handleAddRule}>Add Rule</button>
    </div>
  );
};

export default Rules;
