import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>Dashboard</div>
    <button onClick={()=>navigate('/dashboard/')}>Student</button>
    <button onClick={()=>navigate('/dashboard/courses')}>Courses</button>
    <button onClick={()=>navigate('/dashboard/manager')}>Manager</button>
    <button onClick={()=>navigate('/dashboard/campus')}>Campuses</button>
    <Outlet/>
    </>
  )
}

export default Dashboard