import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import './App.css'; // Import CSS file for particle animation

function App() {
  // Assuming the user's role is passed as a prop from the authentication component
  const userRole = 'deptCoordinator'; // Example user role
  const [displayEventList, setDisplayEventList] = useState(true); // Set displayEventList to true by default
  const [displayEventForm, setDisplayEventForm] = useState(true); // Set displayEventForm to true by default

  // Function to determine if the user is an event coordinator
  const isEventCoordinator = userRole === 'eventCoordinator';

  // Function to determine if the user is either a club coordinator or department coordinator
  const isClubOrDeptCoordinator = userRole === 'clubCoordinator' || userRole === 'deptCoordinator';

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
    <div className="App">
      <Navbar role={userRole} setDisplayEventList={setDisplayEventList} setDisplayEventForm={setDisplayEventForm} />
      <div className="container">
      
        
        <div className="EventList">
        {/* Render EventList if the user is an event coordinator or a club/department coordinator */}
        {isEventCoordinator && displayEventList && <EventList />}
        {isClubOrDeptCoordinator && displayEventList && <EventList />}
        </div>

        <div className="CreateEvent">
        {/* Render EventForm if the user is a club/department coordinator */}
        {isClubOrDeptCoordinator && displayEventForm && <EventForm />}
        </div>

        {/* Render other components based on user role or any other condition */}
      </div>

      {/* Container for particles */}
      <div className="particle-background"></div>

      {/* <div className="main-container">
        <img 
          src="/utsav-logo.jpg" 
          alt="Utsav" 
          className="zoom-in-out" 
        />
      </div> */}
    </div>
  );
}

export default App;
