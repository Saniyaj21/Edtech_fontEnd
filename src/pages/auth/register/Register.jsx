import React, { useState } from 'react'
import './Register.scss'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import dp from '../../../img/profile.jpg'
function Register() {

  const [user , setUser] = useState({})
  const [imageData , setImageData]=useState(dp)
  const navigate = useNavigate()

  const handleData= async(e)=>{
     
      setUser({ ...user , [e.target.name]:e.target.value})
      console.log(user)
  }

  
	const handleImageUpload = (event) => {
		const file = event.target.files[0];

		if (file) {
			// Use a FileReader to read the selected image file
			const reader = new FileReader();

			reader.onload = function (e) {
				// Set the result of the FileReader to the state variable
				setImageData(e.target.result);
			};

			reader.readAsDataURL(file);
		} else {
			// Clear the state variable if no file is selected ..
			setImageData(null);
		}
	};


  const createNewUser= async (e)=>{
      e.preventDefault();
 
  

      if(Object.entries(user).length == 0){
          return toast.error('plese input valid data....');
       }
       if(!user.name || !user.email || !user.password){
        return toast.error('name and email and password required....');
       }
       
       if(user.password.length < 8){
        return toast.error('password must be 8 characters....');
       }

       if(user.password != user.cpassword){
        return toast.error('password and confirm password are not match...')
      }
      
  } 
  return (
    <div>
    <form action="" className='auth-form' onSubmit={createNewUser}>
    <b style={{fontSize:"25px"}}>Register</b><br/>
    <label className='label' htmlFor='file'>
						<img id='image' className='input-image' src={imageData} alt='' />
					</label>
					<input
						hidden
						className='file'
						type='file'
						name='file'
						id='file'
						accept='image/*'
						onChange={handleImageUpload}
					/>

    <input type="name"  placeholder='enter fullname ' name='name' onChange={handleData}/>
    <input type="email" name="email" id="email" placeholder='enter Email' onChange={handleData} />
    <input type="password" name="password" id="pass1" placeholder='enter password ' onChange={handleData}/>
    <input type="password" name="cpassword" id="pass2" placeholder='enter  confirm password' onChange={handleData} />
    <button type='submit'> Register </button>
    <hr />
    <b>You have alrady register </b>
    <Link to={'/auth/login'}> <button> Log in </button> </Link>
    </form>
    

 </div>
  )
}

export default Register