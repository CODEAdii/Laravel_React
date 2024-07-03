import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import Home from '../views/Home'

function GuestLayout() {
    const {token}=useStateContext()
    if (token){
        return <Navigate to="/" replace />;
    }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default GuestLayout;