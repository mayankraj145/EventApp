import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [event, setEvent] = useState({ name: '', date: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    setEvent({ name: '', date: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={event.name}
        onChange={handleChange}
        placeholder="Event Name"
        required
      />
      <input
        type="date"
        name="date"
        value={event.date}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={event.description}
        onChange={handleChange}
        placeholder="Event Description"
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
