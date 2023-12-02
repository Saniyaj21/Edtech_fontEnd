import React, { useDebugValue, useEffect, useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import dp from "../../../img/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, selectUser } from "../../../redux/slices/authSlice";
import Loading from "../../layout/loader/Loading";

function Register() {
    const [avatar, setAvatar] = useState(dp);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const { isAuthenticated, error, status } = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (isAuthenticated === true) {
            navigate("/");
        }
    }, [dispatch, isAuthenticated, error, status, navigate]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setAvatar(e.target.result);
            };

            reader.readAsDataURL(file);
        } else {
            console.log("Error happened");
        }
    };
    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Confirm Password!");
        } else {
            const myForm = new FormData();

			myForm.set("name", userName);
			myForm.set("email", email);
			myForm.set("password", password);
			console.log(userName, email, password);
			myForm.set("avatar", avatar);
			dispatch(registerUser(myForm));
		}
	};
	return (
		<div className='register-new-div'>
			<form
				className='form'
				encType='multipart/form-data'
				onSubmit={handleRegister}
			>
				{/* <h3>Register</h3> */}
				<div className='image-container'>
					{/* <img src={avatar} alt='' /> */}
					
          <label className='label'  for="file">
			<img  id='image' className='input-image' src={avatar} alt="" /></label> 
		  

				</div>
				<div className='image-input'>
					{/* <input
						className='file-input'
						type='file'
						required
						onChange={handleFileChange}
					/> */}
         <input hidden className='file-input' type="file" name="file" id="file" accept='image/*' onChange={handleFileChange}/>

				</div>




				<div>
					{/* <label htmlFor='user-name'>Name</label> */}
					<br />
					<input
						type='text'
						required
						placeholder="Name"
						id='user-name'
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div>
					{/* <label htmlFor='user-email2'>Email</label> */}
					<br />
					<input
						type='email'
						required
						placeholder="Email"

						id='user-email2'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					{/* <label htmlFor='user-password2'>Password</label> */}
					<br />
					<input
						type='password'
						required
						placeholder="Password"

						id='user-password2'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					{/* <label htmlFor='user-password-confirm2'>Confirm Password</label> */}
					<br />
					<input
						type='password'
						required
						placeholder="Confirm password "

						id='user-password-confirm2'
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<div className='action-btn'>
					<button type='submit'>Register</button>
				</div>

                        <p>
                            <Link to={"/auth/login"}>
                                Already registered? Login now
                            </Link>
                        </p>
                    </form>
                </div>
            )}

export default Register;
