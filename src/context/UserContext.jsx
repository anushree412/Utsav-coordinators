// import React, { createContext, useState } from 'react';

// // Create a context object
// export const UserContext = createContext();

// // Create a provider component
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Initialize user state

//   // Function to set user data
//   const setUserData = (userData) => {
//     setUser(userData);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


// // Custom hook to consume user context
// export const useUser = () => {
//   return useContext(UserContext);
// };

// export default UserContext; // Export the UserContext variable
