import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                 <Typography variant='h4'>
                    EmployeeApp
                </Typography>&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to='/add'>Data</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to='/view'>View</Link></Button>&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default Navbar