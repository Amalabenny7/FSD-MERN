import { Button,TextField } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
        <h2>Login</h2>
        <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <br/>
        <br/>
        <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Registration