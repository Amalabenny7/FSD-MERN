import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>welcome to react</h1>
        <br/>
        <h2>Signup</h2>
        <br/>

        <p>
            username:<input type="text" id="name"></input>
            <br/>
            <br/>
            password:<input type="text" id="psd"></input>

        </p>
        <input type="button" id="Signup" value="SUBMIT"></input>
    </div>
  )
}

export default Signup