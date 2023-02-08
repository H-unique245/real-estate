import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import PropertyDetails from '../Components/PropertyDetails'
import Signup from '../Components/Signup'
import Dashboard from '../Pages/Dashboard'
import Home from '../Pages/Home'
import Property from '../Pages/Property'
import PrivateRoute from './PrivateRoute'

function AllRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/property" element={<Property />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  )
}

export default AllRoutes
