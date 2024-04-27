// EventList.jsx

import React from 'react';

function EventList() {
  // Fetch event list data from backend or use mock data
  const events = [
    { id: 1, name: 'Event 1', date: '2024-05-01' },
    { id: 2, name: 'Event 2', date: '2024-05-15' },
    { id: 3, name: 'Event 3', date: '2024-06-01' },
    // Add more events as needed
  ];

  return (
    <div className="EventListHead">
      <br/>
      <h2>Event List</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
