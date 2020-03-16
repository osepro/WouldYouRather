import React from "react";

const UsersList = props => {
  return (
    <div>
      <form className="form" noValidate>
        <select id="users">
          <option>Select User</option>
          <option value={props.id}>{props.name}</option>
        </select>
      </form>
    </div>
  );
};

export default UsersList;
