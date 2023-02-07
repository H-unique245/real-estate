import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Dashboard from '../Pages/Dashboard'

function AllRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/property" element={<h1>Property  page</h1>} />
      <Route path="/details" element={<h1>Property details page</h1>} />
    </Routes>
  )
}

export default AllRoutes
