import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const MainLayout = ({children}) => {
   return (
      <>
      <Header/>
      <Sidebar/>
      {children}
      <Footer/>
      </>
   )
}

export default MainLayout
