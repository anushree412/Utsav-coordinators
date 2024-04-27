import React, { useState } from 'react';

const Coordinators = () => {
  const [coordinators, setCoordinators] = useState([
    { name: '', email: '', phoneNumber: '' }
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newCoordinators = [...coordinators];
    newCoordinators[index][name] = value;
    setCoordinators(newCoordinators);
  };

  const handleAddCoordinator = () => {
    setCoordinators([...coordinators, { name: '', email: '', phoneNumber: '' }]);
  };

  return (
    <div>
      <h4 className="Coordinators">Coordinators</h4>
      {coordinators.map((coordinator, index) => (
        <div key={index} className="mb-3">
          <h6>Coordinator {index + 1}</h6>
          <label htmlFor={`name-${index}`} className="form-label">Name</label>
          <input
            type="text"
            id={`name-${index}`}
            name="name"
            value={coordinator.name}
            onChange={(e) => handleInputChange(index, e)}
            className="form-control"
          />
          <label htmlFor={`email-${index}`} className="form-label mt-2">Email</label>
          <input
            type="email"
            id={`email-${index}`}
            name="email"
            value={coordinator.email}
            onChange={(e) => handleInputChange(index, e)}
            className="form-control"
          />
          <label htmlFor={`phoneNumber-${index}`} className="form-label mt-2">Phone Number</label>
          <input
            type="text"
            id={`phoneNumber-${index}`}
            name="phoneNumber"
            value={coordinator.phoneNumber}
            onChange={(e) => handleInputChange(index, e)}
            className="form-control"
          />
        </div>
      ))}
      <button type="button" className="btn custom-btn-primary" onClick={handleAddCoordinator}>Add Coordinator</button>
    </div>
  );
};

export default Coordinators;
