import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
  var[users,setUsers]=useState([])
  var[update,setUpdate]=useState(false)
  var[singleValue,setSingleValue]=useState([])
  useEffect(() =>{
     axios.get("http://localhost:3005/view")
    .then((res)=>{
      console.log(res.data)
      setUsers(res.data)
    })
     .catch((err)=>console.log(err))
    },[])
    const deleteValues=(id)=>{
      console.log(id)
      axios.delete("http://localhost:3005/remove/"+id)
      .then((response)=>{
        alert(response.data)
        window.location.reload(false)
      })
      .catch((err)=>console.log(err))
      }
      const updateValues=(val)=>{
        console.log("update")
        setUpdate(true)
        setSingleValue(val)
      }
  return (
    <div>
        var finalJSX=<TableContainer>
        <h2>employee form</h2>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Employee Name</TableCell>
                    <TableCell>Employee age</TableCell>
                    <TableCell>Employee position</TableCell>
                    <TableCell>Employee salary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((val,i)=>{
                        return(
                    <TableRow>
                    <TableCell>{val.ename}</TableCell>
                    <TableCell>{val.eage}</TableCell>
                    <TableCell>{val.eposition}</TableCell>
                    <TableCell>{val.esalary}</TableCell>
                    <TableCell>
                      <Button onClick={()=>deleteValues(val.id)}>delete</Button>&nbsp;&nbsp; 
                      <Button onClick={()=>updateValues(val.id)}>update</Button>
                    </TableCell>
                      </TableRow>
                        )})}
                    </TableBody>
            </Table>
          </TableContainer>
          if(update)finalJSX=<Data data={singleValue}
          method='put'/>;
        return finalJSX
        </div>
                        )}


export default View