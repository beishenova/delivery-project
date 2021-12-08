import { Router } from '@material-ui/icons'
import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import MainPage from '../pages/MainPage'

const AppRoutes = () => {
   return (
   <BrowserRouter>
      <Routes>
         <Route path = "/" element = {<MainPage />}/>
      </Routes>
      </BrowserRouter>
   )
}

export default AppRoutes

