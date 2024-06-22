import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [val,setval]=useState(0)
    const increment=()=>{
        setval(val+1)   
    }
    const decrement=()=>{
        setval(val-1)   
    }
  return (

    <div>
      <Typography variant='h4'>Counterno {val}</Typography> 
      <Button variant="contained" onClick={increment}>+</Button>
      <Button variant="contained" onClick={decrement}>-</Button> 
    </div>
  )
}

export default Counter