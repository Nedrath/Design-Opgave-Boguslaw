import React, { createContext, useState, useEffect } from "react";

export const userContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1234/data/learninghours.json")
      .then((response) => response.json())
      .then((result) => setUser(result.user));
  }, []);
// console.log(props.children);
  return (
    <userContext.Provider value={{ user }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
