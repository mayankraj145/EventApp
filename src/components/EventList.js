import React from 'react';
import './EventList.css';

const EventList = ({ events }) => {
  return (
    <div className="event-list-container">
      <h2>Event List</h2>
      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <h3>{event.name}</h3>
            <p><strong>Start:</strong> {event.start}</p>
            <p><strong>End:</strong> {event.end}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Tickets:</strong> {event.tickets ? 'Yes' : 'No'}</p>
            <p><strong>Require Approval:</strong> {event.requireApproval ? 'Yes' : 'No'}</p>
            <p><strong>Capacity:</strong> {event.capacity}</p>
            <p><strong>Visibility:</strong> {event.visibility}</p>
            <p><strong>Theme:</strong> {event.theme}</p>
            <p><strong>Color:</strong> {event.color}</p>
            <p><strong>Typeface:</strong> {event.typeface}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;