import React, { useState } from 'react';
import DateInput from './DateInput';
import Registration from './Registration';
import Sponsors from './Sponsors';
import ResourcePerson from '../ResourcePerson';
import Rules from './Rules';
import Prizes from './Prizes';
import EventDetails from './EventDetails'
import Coordinators from './Coordinators';
import EventIntro from '../EventIntro';
import IndustryConnect from './IndustryConnect';


const EventForm = () => {
  const [formData, setFormData] = useState({
    startDate: null,
    lastDate: null
  });

  const handleStartDateChange = (date) => {
    setFormData(prevData => ({
      ...prevData,
      startDate: date
    }));
  };

  const handleLastDateChange = (date) => {
    setFormData(prevData => ({
      ...prevData,
      lastDate: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to handle form submission (e.g., send data to server)
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="CreateEventHead">Create Event</h2>

        <EventIntro/>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date</label>
          <DateInput
            selectedDate={formData.startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastDate" className="form-label">Last Date</label>
          <DateInput
            selectedDate={formData.lastDate}
            onChange={handleLastDateChange}
          />
        </div>
        
        <Registration/>
        <Sponsors/>
        <ResourcePerson/>
        <Rules/>
        <Prizes/>
        <EventDetails/>
        <Coordinators/>
        <IndustryConnect/>

        <button type="submit" className="btn custom-btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;