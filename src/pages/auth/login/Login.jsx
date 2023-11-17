import React, { useEffect, useState } from "react";
import "./login.scss";
import { toast } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser } from "../../../redux/slices/authSlice";

function Login() {
	const dispatch = useDispatch();
	const { isAuthenticated, error, status } = useSelector(selectUser);
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (error) {
			toast.error(error);
		}
		if (isAuthenticated === true) {
			navigate("/");
		}
	}, [dispatch, isAuthenticated, error, status, navigate]);

	const handleLogin = async (e) => {
		e.preventDefault();
		dispatch(loginUser({ loginEmail: email, loginPassword: password }));
	};

	return (
		<main>
			<div className='register-new-div'>
				<form
					className='form'
					encType='multipart/form-data'
					onSubmit={handleLogin}
				>
					<h3>Login</h3>
					<div>
						<label htmlFor='user-email2'>Email</label>
						<br />
						<input
							type='email'
							required
							id='user-email2'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor='user-password2'>Password</label>
						<br />
						<input
							type='password'
							required
							id='user-password2'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className='action-btn'>
						<button type='submit'>Login</button>
					</div>

					<p>
						<Link to={"/auth/register"}>New here? Register now</Link>
					</p>
				</form>
			</div>
	
				
		</main>
	);
}

export default Login;
