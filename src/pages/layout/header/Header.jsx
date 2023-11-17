import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import AuthHeader from "./components/AuthHeader";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/authSlice";
import {toast} from 'react-hot-toast';

const Nav = () => {
	const [isNavMobile, setIsNavMobile] = useState(false);
	const {user} = useSelector(selectUser);

	const toggleMenu = () => {
		setIsNavMobile(!isNavMobile);
	};

	const userName = user?.name
	useEffect(() => {
	  if (userName) {
		toast.success(`Loged in as ${userName}`)
	  }
	}, [userName])
	

	return (
		<header className={`${isNavMobile ? "fix-to-top" : ""}`}>
			<nav className={`nav ${isNavMobile ? "nav-mobile" : ""}`}>
				<span className='logo'>
					<a href='/'>
						<span className='logo-text'>StudentQ</span>
					</a>
				</span>
				
				<span
					onClick={toggleMenu}
					className={`hamburg ${isNavMobile ? "ham" : ""}`}
				>
					<div className='span-1 ham-lines'></div>
					<div className='span-2 ham-lines'></div>
					<div className='span-3 ham-lines'></div>
				</span>
			</nav>
			<div className={`side-block ${isNavMobile ? "toggle-side-block" : ""}`}>
				<ul className='ul'>
					
					<Link className='nav-a' to={"/"}>
						<li className='nav-li'>
							{" "}
							<i className='fa-solid fa-house'></i>Home
						</li>
					</Link>
					<Link className='nav-a' to={"/admin/dashbord"}>
						<li className='nav-li'>
							<i className='fa-solid fa-layer-group'></i>Dashboard
						</li>
					</Link>
					<Link className='nav-a' to={"/auth/login"}>
						<li className='nav-li'>
							<AuthHeader />
						</li>
					</Link>
				</ul>
			</div>
		</header>
	);
};

export default Nav;
