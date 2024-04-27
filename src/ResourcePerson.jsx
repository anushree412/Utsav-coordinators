import React, { useState } from 'react';

const ResourcePerson = () => {
  const [persons, setPersons] = useState([
    { name: '', role: '', linkedin: '' }
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newPersons = [...persons];
    newPersons[index][name] = value;
    setPersons(newPersons);
  };

  const handleAddPerson = () => {
    setPersons([...persons, { name: '', role: '', linkedin: '' }]);
  };

  return (
    <div>
      <h4 className="ResourcePersons">Resource Persons</h4>
      {persons.map((person, index) => (
        <div key={index} className="mb-3">
          <h6>Resource Person {index + 1}</h6>
          <label htmlFor={`name-${index}`} className="form-label">Name</label>
          <input
  type="text"
  id={`name-${index}`}
  name={`name-${index}`} // Comment moved outside of curly braces
  value={person.name}
  onChange={(e) => handleInputChange(index, e)}
  className="form-control"
/>

          <label htmlFor={`role-${index}`} className="form-label mt-2">Role</label>
          <input
  type="text"
  id={`role-${index}`}
  name={`role-${index}`} // Comment moved outside of curly braces
  value={person.role}
  onChange={(e) => handleInputChange(index, e)}
  className="form-control"
/>

          <label htmlFor={`linkedin-${index}`} className="form-label mt-2">LinkedIn URL</label>
          <input
  type="text"
  id={`linkedin-${index}`}
  name={`linkedin-${index}`} // Corrected here
  value={person.linkedin}
  onChange={(e) => handleInputChange(index, e)}
  className="form-control"
/>

        </div>
      ))}
      <button type="button" className="btn custom-btn-primary" onClick={handleAddPerson}>Add Resource Person</button>
    </div>
  );
};

export default ResourcePerson;
