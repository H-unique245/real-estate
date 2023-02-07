import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'

function AllRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/login" element={<h1>Login page</h1>} />
      <Route path="/signup" element={<h1>Signup page</h1>} />
      <Route path="/details" element={<h1>Property details page</h1>} />
    </Routes>
  )
}

export default AllRoutes
