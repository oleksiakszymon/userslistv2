import React from "react";
import "./UsersList";
import "./App";

export default function UserInfo(props) {
  const { user } = props;

  return (
    <div className="user-info">
      <div>
        {user.id !== "" ? (
          <div>
            <p>Name: {user.first_name + user.last_name}</p>
            <p>Mail: {user.email}</p> <img alt="avatar" src={user.avatar} />
          </div>
        ) : (
          <h1>Wybierz użytkownika</h1>
        )}
      </div>
    </div>
  );
}
