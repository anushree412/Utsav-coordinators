import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const EventForm = () => {
  // Define field labels based on the provided content in the CSV file
  const fieldLabels = [
    'id', 'eventID', 'name', 'description', 'category', 'type[0]', 'type[1]', 'type[2]', 'fee', 'is_IEEE', 'ieee_Fee', 'eventMode', 'club', 'venue',
    'date', 'lastDate', 'stopWebsiteReg', 'stopSpotReg', 'stopAllReg', 'sponsors[0].name', 'sponsors[0].websiteLink', 'sponsors[0].description', 'sponsors[0].imageLink', 'sponsors[0]._id',
    'resourcePersons[0].name', 'resourcePersons[1].name', 'resourcePersons[2].name', 'resourcePersons[3].name', 'resourcePersons[4].name', 'resourcePersons[0].role', 'resourcePersons[1].role',
    'resourcePersons[2].role', 'resourcePersons[3].role', 'resourcePersons[4].role', 'resourcePersons[0].linkedInUrl', 'resourcePersons[1].linkedInUrl', 'resourcePersons[2].linkedInUrl',
    'resourcePersons[3].linkedInUrl', 'resourcePersons[4].linkedInUrl', 'resourcePersons[0]._id', 'resourcePersons[1]._id', 'resourcePersons[2]._id', 'resourcePersons[3]._id',
    'resourcePersons[4]._id', 'rules[0].rule', 'rules[1].rule', 'rules[2].rule', 'rules[3].rule', 'rules[4].rule', 'rules[5].rule', 'rules[6].rule', 'rules[7].rule',
    'rules[8].rule', 'rules[9].rule', 'rules[10].rule', 'rules[11].rule', 'rules[0]._id', 'rules[1]._id', 'rules[2]._id', 'rules[3]._id', 'rules[4]._id', 'rules[5]._id', 'rules[6]._id',
    'rules[7]._id', 'rules[8]._id', 'rules[9]._id', 'rules[10]._id', 'rules[11]._id', 'prizes[0].price', 'prizes[1].price', 'prizes[2].price', 'prizes[0]._id', 'prizes[1]._id', 'prizes[2]._id',
    'details[0].isIndividual', 'details[0].minimumParticipants', 'details[0].maximumParticipants', 'details[0]._id', 'coordinators[0].name', 'coordinators[1].name', 'coordinators[2].name',
    'coordinators[3].name', 'coordinators[0].email', 'coordinators[1].email', 'coordinators[2].email', 'coordinators[3].email', 'coordinators[0].phone', 'coordinators[1].phone',
    'coordinators[2].phone', 'coordinators[3].phone', 'coordinators[0]._id', 'coordinators[1]._id', 'coordinators[2]._id', 'coordinators[3]._id', 'industryConnect', 'createdAt',
    'updatedAt', '__v', 'posterLink', 'prizes[0]', 'sponsors[0]', 'resourcePersons[0]', 'rules[0]'
  ];

  // Initialize form data state
  const initialFormData = Object.fromEntries(fieldLabels.map(label => [label, '']));
  const [formData, setFormData] = useState(initialFormData);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to handle form submission (e.g., send data to server)
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(formData).map(([fieldName, fieldValue]) => (
        <div key={fieldName} className="mb-3">
          <label htmlFor={fieldName} className="form-label">{fieldName}</label>
          <input
            type="text"
            className="form-control"
            id={fieldName}
            name={fieldName}
            value={fieldValue}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default EventForm;
