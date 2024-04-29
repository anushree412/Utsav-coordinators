// EventList.jsx

import React from 'react';

function EventList() {
  // Fetch event list data from backend or use mock data
  const events = [
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 3, name: 'Event 3' },
    // Add more events as needed
  ];

  return (
    <div className="EventListHead">
      <br/>
      <h2>Event List</h2>
      <div>
        {events.map(event => (
          <p key={event.id}>
            {event.name} 
          </p>
        ))}
      </div>
    </div>
  );
}

export default EventList;
