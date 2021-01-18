import React from 'react';

const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const allData = [];

  return (
    <UserContext.Provider value={{ allData }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
