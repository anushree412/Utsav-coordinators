import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
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

  const handleSignOut = () => {
    // Add signout logic here
    console.log('Signing out...');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <span className="navbar-brand">Co-Ordinator's</span>
        <div className="d-none d-lg-flex flex-column align-items-center">
          <FaUserCircle className="user-profile-icon" size={40} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
          <p className="user-name" onClick={toggleSidebar} style={{ cursor: 'pointer' }}>{userInfo && userInfo.name}</p>
        </div>

        {window.innerWidth <= 900 &&
          <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes className="hamburger-icon" /> : <FaBars className="hamburger-icon" />}
          </button>
        }

      </div>
      <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="user-info">
          <FaUserCircle className="profile-icon" size={60} />
          <div className="user-details">
            <p className="name">{userInfo && userInfo.name}</p>
            <p className="usn">{userInfo && userInfo.usn}</p>
            <p className="email">{userInfo && userInfo.email}</p>
            <p className="position">{userInfo && userInfo.position}</p>
            <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
