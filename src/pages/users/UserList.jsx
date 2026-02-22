import React from 'react'
import { Link } from 'react-router'


const users = ["sara", "rivka", "rachel", "leah"]

const UserList = () => {
  return (
    <div>
      <h1>Hello User List</h1>
      <div>
        <Link to="insert">Insert new user</Link>
      </div>
      {/* <div>
        <Link to="details">user Details</Link>
      </div> */}
      {users.map((u, i) => (
        <div key={i}>
          <Link to={u}>{u}</Link>
        </div>
      ))}

    </div>
  )
}

export default UserList