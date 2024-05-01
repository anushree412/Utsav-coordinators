// EventList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function EventList() {
  // Mock event data
  const events = [
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 3, name: 'Event 3' },
    // Add more events as needed
  ];

  return (
    <div className="EventListContent">
      <h2>Event List</h2>
      <div>
        {/* Render event links */}
        {events.map(event => (
          <div className="EventListName" key={event.id}>
            {/* Link to the event details page */}
            <Link to={`/event/${event.id}`}>
              {event.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
