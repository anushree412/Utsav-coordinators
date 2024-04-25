import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Sidebar() {
  const { user } = useContext(UserContext);

  // Check if user object is null or undefined
  if (!user) {
    // Render a loading state or return null
    return <p>Loading...</p>;
  }

  // Destructure user object to access its properties safely
  const { name, email, position, role } = user;

  return (
    <div>
      {/* Display user's information */}
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Position: {position}</p>
      <br/>
      <br/>

      {/* Display events or options based on user's role */}
      {role === 'eventCoordinator' && (
        <div>
          {/* Display events or options for event coordinators */}
        </div>
        
      )}
      {role === 'clubCoordinator' && (
        <div>
          {/* Display events or options for club coordinators */}
        </div>
      )}
      {role === 'departmentCoordinator' && (
        <div>
          {/* Display events or options for department coordinators */}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
