
import React, { useEffect, useState } from "react";
import "./login.scss";
import {toast} from 'react-hot-toast'

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser } from "../../../redux/slices/auth";

function Login() {
	const dispatch = useDispatch();
	const { isAuthenticated, error, status } = useSelector(selectUser);

	
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const hendleData = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

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
		dispatch(
			loginUser({ loginEmail: user.email, loginPassword: user.password })
		);
	};



	return (
		<div>
			<form id='login' action='' className='auth-form' onSubmit={handleLogin}>
				<b style={{ fontSize: "25px" }}>Login </b>
				<br></br>
				<input
					type='email'
					name='email'
					id=''
					placeholder='enter valid Email'
					onChange={hendleData}
				/>
				<input
					type='password'
					name='password'
					id=''
					placeholder='enter vaild password '
					onChange={hendleData}
				/>
				<button type='submit'>Log In</button>

				<p>
					If you loss your password
					<strong>
						<Link to={"/auth/forgotPassword"}>
							<span>Forget password</span>
						</Link>
					</strong>
				</p>
				<br />
				<hr />
				<b>If you are not Register </b>
				<Link to={"/auth/register"}>
					<button type=''>Register</button>
				</Link>
			</form>
		</div>
	);
}

export default Login;
