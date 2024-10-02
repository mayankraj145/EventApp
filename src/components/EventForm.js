import React, { useState } from 'react';
import './EventForm.css';

const EventForm = ({ addEvent }) => {
  const [event, setEvent] = useState({
    name: '',
    start: '',
    end: '',
    location: '',
    tickets: false,
    requireApproval: false,
    capacity: '',
    visibility: 'Public',
    theme: 'Minimal',
    color: 'Gray',
    typeface: 'Default',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEvent({ ...event, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    setEvent({
      name: '',
      start: '',
      end: '',
      location: '',
      tickets: false,
      requireApproval: false,
      capacity: '',
      visibility: 'Public',
      theme: 'Minimal',
      color: 'Gray',
      typeface: 'Default',
    });
  };

  return (
    <div className="event-form-container">
      <form onSubmit={handleSubmit} className="event-form">
        <h2>Create Event</h2>
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
            placeholder="Event Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Start</label>
          <input
            type="datetime-local"
            name="start"
            value={event.start}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End</label>
          <input
            type="datetime-local"
            name="end"
            value={event.end}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Add Event Location</label>
          <input
            type="text"
            name="location"
            value={event.location}
            onChange={handleChange}
            placeholder="Offline location or virtual link"
            required
          />
        </div>
        <div className="form-group">
          <label>Event Options</label>
          <div className="event-options">
            <div>
              <input
                type="checkbox"
                name="tickets"
                checked={event.tickets}
                onChange={handleChange}
              />
              <label>Tickets</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="requireApproval"
                checked={event.requireApproval}
                onChange={handleChange}
              />
              <label>Require Approval</label>
            </div>
            <div>
              <input
                type="number"
                name="capacity"
                value={event.capacity}
                onChange={handleChange}
                placeholder="Capacity"
              />
              <label>Capacity</label>
            </div>
            <div>
              <select
                name="visibility"
                value={event.visibility}
                onChange={handleChange}
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
              <label>Visibility</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Theme</label>
          <div className="theme-options">
            <div>
              <input
                type="radio"
                name="theme"
                value="Minimal"
                checked={event.theme === 'Minimal'}
                onChange={handleChange}
              />
              <label>Minimal</label>
            </div>
            <div>
              <input
                type="radio"
                name="theme"
                value="Holiday"
                checked={event.theme === 'Holiday'}
                onChange={handleChange}
              />
              <label>Holiday</label>
            </div>
            <div>
              <input
                type="radio"
                name="theme"
                value="Abstract"
                checked={event.theme === 'Abstract'}
                onChange={handleChange}
              />
              <label>Abstract</label>
            </div>
            <div>
              <input
                type="radio"
                name="theme"
                value="Quantum"
                checked={event.theme === 'Quantum'}
                onChange={handleChange}
              />
              <label>Quantum</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Color</label>
          <select
            name="color"
            value={event.color}
            onChange={handleChange}
          >
            <option value="Gray">Gray</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
          </select>
        </div>
        <div className="form-group">
          <label>Typeface</label>
          <select
            name="typeface"
            value={event.typeface}
            onChange={handleChange}
          >
            <option value="Default">Default</option>
            <option value="Serif">Serif</option>
            <option value="Sans-serif">Sans-serif</option>
            <option value="Monospace">Monospace</option>
          </select>
        </div>
        <button type="submit" className="create-event-button">Create Event</button>
      </form>
      <div className="event-preview">
        <img src="https://via.placeholder.com/300" alt="Event" />
        <div className="theme-options">
          <label>Theme</label>
          <div className="themes">
            <div className="theme">Minimal</div>
            <div className="theme">Holiday</div>
            <div className="theme">Abstract</div>
            <div className="theme">Quantum</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;