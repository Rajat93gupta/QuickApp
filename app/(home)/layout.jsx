import React from 'react'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
       <Header/>
        {children}
        <Footer/>
      
    </div>
  )
}

export default Layout
