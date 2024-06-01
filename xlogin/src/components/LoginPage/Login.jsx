import React from 'react'
import { useState } from 'react'

function Login() {

    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    const [flag,setflag]=useState(false)

    const[errormessage,setErrorMessage] = useState(false)


    const handleSubmit = (e)=>{
  e.preventDefault();

  if(!username || !password){
    return
  }

  if(username==="username" && password==="password"){
setflag(true)
  }
  else{
 setErrorMessage(true)
  }
    }

   
    
    const handleUsername = (e)=>{
        setusername(e.target.value)
      }
      
      const handlePassword = (e)=>{
        setpassword(e.target.value)
      }

  return (


    <div>
        
        <h1>Login Page</h1>

        {

         errormessage && (
            <h6>Invalid username or password</h6>
         )
        }
    { !flag && (
        <form onSubmit={handleSubmit}>
      
      <div> 
        
        <label>Username:</label>
       <input  type="text" placeholder="username" value={username}onChange={handleUsername} required></input>
       </div>
       <label>Password:</label>
       <input  type="password" placeholder="password" value={password} onChange={handlePassword} required></input>
       <div> 
         <button type="submit">Submit</button>
        </div>
    
        </form>
    )
}
{flag && (
 
 <h6>Welcome,user!</h6>

)}
        </div>
)
}

export default Login