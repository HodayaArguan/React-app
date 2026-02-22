import React from 'react'
import { useNavigate, useParams } from 'react-router'
const UserDetails = () => {

  const { userName } = useParams();
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div>
      <h2>Hello {userName}</h2>
      <button onClick={handleClick}>Go Back</button>
    </div>
  )
}

export default UserDetails