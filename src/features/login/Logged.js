import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from "./loginSlice";

export const Logged = () => {

    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(logout());
    }

  return (
    <div>
        <h1>Bienvenue</h1>
        <button onClick={handleClick}>Logout</button>
    </div>
  )
}
