import React, { useState, useEffect } from "react";
import "./App.css";
import UsersList from "./UsersList";
import UserInfo from "./UserInfo";

export default function App() {
  const [selectedUser, setSelectedUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
    id: "",
  });

  function changeUser(user) {
    setSelectedUser(user);
  }

  return (
    <div className="App">
      <UsersList click={changeUser} selectedUser={selectedUser} />
      <UserInfo user={selectedUser} />
    </div>
  );
}
