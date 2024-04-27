import React, { useState } from 'react';

const EventIntro = () => {
  const [eventIntro, setEventIntro] = useState({
    eventId: '',
    name: '',
    description: '',
    category: '',
    type: '',
    fees: '',
    eventMode: '',
    club: '',
    venue: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventIntro(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h4 className="EventIntro">Event Introduction</h4>
      <div className="mb-3">
        <label htmlFor="eventId" className="form-label">Event ID</label>
        <input
          type="text"
          id="eventId"
          name="eventId"
          value={eventIntro.eventId}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={eventIntro.name}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          name="description"
          value={eventIntro.description}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={eventIntro.category}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="type" className="form-label">Type</label>
        <input
          type="text"
          id="type"
          name="type"
          value={eventIntro.type}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fees" className="form-label">Fees</label>
        <input
          type="text"
          id="fees"
          name="fees"
          value={eventIntro.fees}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eventMode" className="form-label">Event Mode</label>
        <input
          type="text"
          id="eventMode"
          name="eventMode"
          value={eventIntro.eventMode}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="club" className="form-label">Club</label>
        <input
          type="text"
          id="club"
          name="club"
          value={eventIntro.club}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="venue" className="form-label">Venue</label>
        <input
          type="text"
          id="venue"
          name="venue"
          value={eventIntro.venue}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default EventIntro;
