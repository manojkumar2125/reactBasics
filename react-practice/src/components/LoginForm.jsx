import React, { useState } from "react";

function LoginForm(){
  const[firstName , setFirstName] = useState();
  const[lastName,setLastName] = useState();

  return(
   <>
    <input value ={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter the firstName"/>
    <input value ={lastName} onChange={(e) =>setLastName(e.target.value)} placeholder="Enter the lastName"/>
    {firstName && lastName && (
  <>
    <p>Welcome {firstName}, {lastName}</p>
    <button onClick={() => alert(`First Name: ${firstName}, Last Name: ${lastName}`)}>
      Submit
    </button>
  </>
)}

     </>
  )

}

export default LoginForm