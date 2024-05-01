import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import CreateEventButton from './components/CreateEventButton';
import Event from './components/Event';
import AttendancePage from './components/AttendancePage';
import AddStudentPage from './components/AddStudentPage'; // Import the AddStudentPage component
import './App.css';

function App() {
  const [userRole, setUserRole] = useState('clubCoordinator');
  const [displayEventList, setDisplayEventList] = useState(true);
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', phone: '1234567890', attended: false },
    { id: 2, name: 'Student 2', phone: '2345678901', attended: false },
    { id: 3, name: 'Student 3', phone: '3456789012', attended: false },
    // Add more students as needed
  ]);

  // Function to generate particles dynamically
  const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    document.querySelector('.particle-background').appendChild(particle);

    // Set random position for the particle
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Set random size and animation duration for the particle
    const size = Math.random() * 10 + 5; // Random size between 5 and 15
    const duration = Math.random() * 2 + 1; // Random duration between 1 and 3 seconds
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${duration}s`;

    // Remove the particle from the DOM after animation completes
    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  };

  // Function to generate particles continuously
  const generateParticles = () => {
    const numParticles = 35; // Number of particles to generate

    // Generate particles dynamically
    for (let i = 0; i < numParticles; i++) {
      createParticle();
    }
  };

  useEffect(() => {
    generateParticles(); // Generate particles when the component mounts
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar role={userRole} setDisplayEventList={setDisplayEventList} />
        
        {/* Container for particles */}
        <div className="particle-background"></div>

        {/* Define routes */}
        <Routes>
          <Route path="/" element={
            <div className="content-container">
              <div className="content-box1">
                {displayEventList && <EventList />}
              </div>
              <div className="content-box2">
                <CreateEventButton />
              </div>
            </div>
          } />
          <Route path="/create-event" element={<EventForm />} />
          <Route path="/event/:id" element={<Event students={students} setStudents={setStudents} />} />
          <Route path="/event/:id/attendance/:studentId" element={<AttendancePage students={students} setStudents={setStudents} />} />
          {/* Add route for AddStudentPage */}
          <Route path="/event/:id/attendance/:studentId/add-student" element={<AddStudentPage />} />
        <Route path="/event/:id/attendance/:studentId" element={<AttendancePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
