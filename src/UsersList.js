import React, { useEffect, useState } from "react";

export default function UsersList(props) {
  const [users, setUsers] = useState([]);

  function changeUser(user) {
    props.click(user);
  }

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="users-list">
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              id={user.id}
              class={
                user.id === props.selectedUser.id ? "selected-user" : "user"
              }
              onClick={() => changeUser(user)}
            >
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
