import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './contexts/AuthContext'
import MainLayout from './layouts/MainLayout'
import AppRoutes from './routes'

const App = () => {
  return (
    <BrowserRouter>
    <AuthContext>
        <AppRoutes />
    </AuthContext>
  </BrowserRouter>
  )
}

export default App

