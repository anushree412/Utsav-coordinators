import React, { useState } from 'react';

const EventDetails = () => {
  const [details, setDetails] = useState({
    isIndividual: false,
    maxParticipants: '',
    minParticipants: ''
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? event.target.checked : value
    }));
  };

  return (
    <div>
      <h4 className="EventDetails">Event Details</h4>
      <div className="mb-3">
        <div className="form-check">
          <input
            type="checkbox"
            id="isIndividual"
            name="isIndividual"
            checked={details.isIndividual}
            onChange={handleInputChange}
            className="form-check-input"
          />
          <label htmlFor="isIndividual" className="form-check-label">Is Individual?</label>
        </div>
        <label htmlFor="maxParticipants" className="form-label mt-2">Maximum Participants</label>
        <input
          type="number"
          id="maxParticipants"
          name="maxParticipants"
          value={details.maxParticipants}
          onChange={handleInputChange}
          className="form-control"
        />
        <label htmlFor="minParticipants" className="form-label mt-2">Minimum Participants</label>
        <input
          type="number"
          id="minParticipants"
          name="minParticipants"
          value={details.minParticipants}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default EventDetails;
