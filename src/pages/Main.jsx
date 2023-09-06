import React, { useState, useEffect } from "react";
import "../components/UserCard/index";
import Header from "../components/Header";
import UsersCard from "../components/UserCard";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const users = await response.json(response);
      setData(users);
    } catch (error) {
      console.log("Error in response : ", error);
    }
  };
  
  return (
    <>
      <Header />
      {data.map((user, index) => (
        <UsersCard key={index} user={user} />
      ))}
    </>
  );
}

export default Main;
