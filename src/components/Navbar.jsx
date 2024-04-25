// Navbar.jsx

import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaUserCircle } from 'react-icons/fa'; // Import the user circle icon from react-icons
import { RiAddCircleLine } from 'react-icons/ri'; // Import the add circle icon from react-icons
import './Navbar.css'; // Import custom CSS for styling
import { FaTimes } from 'react-icons/fa';

function Navbar({ role, setDisplayEventList, setDisplayEventForm }) {
  const [userInfo, setUserInfo] = useState(null); // Assuming user info will be fetched from the backend
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (!userInfo && !sidebarOpen) {
      fetchUserInfo();
    }
  };

  // Function to close sidebar when clicking outside of it
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to fetch user info (Mocked for now, you'll replace it with backend API call)
  const fetchUserInfo = () => {
    // Mocking user info for demonstration
    const mockUserInfo = {
      name: 'John Doe',
      usn: 'A1234567',
      email: 'john.doe@example.com',
      position: role === 'eventCoordinator' ? 'Event Coordinator' : role === 'clubCoordinator' ? 'Club Coordinator' : 'Dept Coordinator',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg' // Example profile picture
    };
    setUserInfo(mockUserInfo);
  };

  // Render additional options based on user role
  const renderAdditionalOptions = () => {
    if (role === 'eventCoordinator') {
      return <p>Event details</p>;
    } else if (role === 'clubCoordinator' || role === 'deptCoordinator') {
      return (
        <div className="additional-options">
          <button className="menu-item" onClick={() => setDisplayEventList(true)}>Event List</button>
          {(role === 'clubCoordinator' || role === 'deptCoordinator') && (
            <button className="menu-item" onClick={() => setDisplayEventForm(true)}>Create Event</button>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">UTSAV</span>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={toggleSidebar}>
                <FaUserCircle className="user-profile-icon" size={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}><FaTimes size={20} /></button>
        <div className="user-info">
          <FaUserCircle className="profile-icon" size={60} />
          <div className="user-details">
            <p>Name: {userInfo && userInfo.name}</p>
            <p>USN: {userInfo && userInfo.usn}</p>
            <p>Email: {userInfo && userInfo.email}</p>
            <p>Position: {userInfo && userInfo.position}</p>
          </div>
        </div>
        {renderAdditionalOptions()}
      </div>
    </nav>
  );
}

export default Navbar;
