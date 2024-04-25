import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ role, setDisplayEventList, setDisplayEventForm }) {
  const [userInfo, setUserInfo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (!userInfo && !sidebarOpen) {
      fetchUserInfo();
    }
  };

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

  useEffect(() => {
    if (!userInfo) {
      fetchUserInfo();
    }
  }, []);

  const fetchUserInfo = () => {
    const mockUserInfo = {
      name: 'John Doe',
      usn: 'A1234567',
      email: 'john.doe@example.com',
      position: role === 'eventCoordinator' ? 'Event Coordinator' : role === 'clubCoordinator' ? 'Club Coordinator' : 'Dept Coordinator',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg'
    };
    setUserInfo(mockUserInfo);
  };

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
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <span className="navbar-brand">UTSAV</span>
        <div className="d-flex align-items-center flex-column" onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
          <div>
            <FaUserCircle className="user-profile-icon" size={40} />
          </div>
          <p className="user-name">{userInfo && userInfo.name}</p>
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
