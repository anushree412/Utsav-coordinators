// App.jsx

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventForm from './components/EventForm';

function App() {
  // Assuming the user's role is passed as a prop from the authentication component
  const userRole = 'clubCoordinator'; // Example user role
  const [displayEventList, setDisplayEventList] = useState(false);
  const [displayEventForm, setDisplayEventForm] = useState(false);

  return (
    <div className="App">
      <Navbar role={userRole} setDisplayEventList={setDisplayEventList} setDisplayEventForm={setDisplayEventForm} />
      <div className="container">
        {displayEventList && <EventList />}
        {displayEventForm && <EventForm />
        }
        {/* Render other components based on user role or any other condition */}
      </div>

      <div className="main-container">
      <div className="particle-background"></div> {/* Container for particles */}
      <img 
        src="/utsav-logo.jpg" 
        alt="Utsav" 
        className="zoom-in-out" 
      />
    </div>
    </div>

    
  );
}

export default App;
