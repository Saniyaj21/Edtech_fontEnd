import toast from 'react-hot-toast';
import React, { useState } from 'react'
import './login.scss'

import { Link , useNavigate } from 'react-router-dom';

function Login() {
  const [user , setUser] = useState({});
  const navigate = useNavigate()
  const hendleData = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
   }

  const handleLogin =async (e)=>{
     e.preventDefault();
   if(Object.entries(user).length == 0){
      return toast.error('plese input valid data....');
   }
   if(!user.password || !user.email){
    return toast.error('email and password required....');
   }
   
     try {
      //const config = {headers:{'Content-type':'application/json'}, withCedentials:true}
      const { data } = await axios.post('http://localhost:8080/auth/login', user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
        toast.success(data.message)
        console.log('success',data)
        navigate('/')

     } catch (error) {
      
      console.log(error)
      toast.error(error.response.data.message)
        
     }
  }

  return (
    <div>
    <form id='login' action="" className='auth-form' onSubmit={handleLogin}>
    <b style={{fontSize:"25px"}}>Login </b><br></br>
    <input type="email" name="email" id="" placeholder='enter valid Email' onChange={hendleData} />
    <input type="password" name="password" id="" placeholder='enter vaild password ' onChange={hendleData}/>
    <button type='submit'>Log In</button>
   
    <p>If you loss your password
       <strong>
        <Link to={'/auth/forgotPassword'}><span >Forget password</span></Link>
      </strong> 
    </p>
    <br />
    <hr />
    <b>If you are not Register  </b>
    <Link to={'/auth/register'}><button type=''>Register</button></Link>
    </form>

  </div>
  )
}

export default Login