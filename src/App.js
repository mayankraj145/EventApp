import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Event Creation App</h1>
        <nav>
          <ul>
            <li><Link to="/">Create Event</Link></li>
            <li><Link to="/events">Event List</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<EventForm addEvent={addEvent} />} />
          <Route path="/events" element={<EventList events={events} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
