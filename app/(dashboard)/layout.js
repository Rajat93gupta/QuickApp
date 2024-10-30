import React from 'react'
import { Box } from '@mui/material'
import SidebarApp from '../sidebarComponent/SideBar/sidebar'

const Layout = ({children}) => {
  return (
    <Box sx={{ display: 'flex', position:'relative' }}>
        <SidebarApp/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        {children}
        </Box>
      
    </Box>
  )
}

export default Layout
