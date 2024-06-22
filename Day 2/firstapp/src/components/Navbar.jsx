import { AppBar ,Button,Toolbar, Typography} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h4'>
                    My App
                </Typography>&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to='/sin'>Signup</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to='/'>Login</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='secondary'><Link to='/b'>State</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to='/c'>Counter</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to='/l'>List</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='secondary'><Link to='/a'>Api</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='error'><Link to='/s'>Sampleuse</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='error'><Link to='/g'>Getcard</Link></Button>&nbsp;&nbsp;

            </Toolbar>


        </AppBar>
    </div>
  )
}

export default Navbar