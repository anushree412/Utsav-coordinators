import React from 'react';
import { Link } from 'react-router-dom';


const CreateEventButton = () => {
  return (
    <div>
      
      <Link to="/create-event" className="btnCreate">
        Create Event
      </Link>
    </div>
  );
};

export default CreateEventButton;
