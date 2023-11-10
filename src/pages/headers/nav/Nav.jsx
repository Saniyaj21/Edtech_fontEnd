import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";


const Nav = () => {
	const [isNavMobile, setIsNavMobile] = useState(false);

	const toggleMenu = () => {
		setIsNavMobile(!isNavMobile);
	};

	return (
		<header className={`${isNavMobile ? "fix-to-top" : ""}`}>
			<nav className={`nav ${isNavMobile ? "nav-mobile" : ""}`}>
				<span className='logo'>
					<a href='/'>
						<span className='logo-text'>LOGO</span>
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
					<Link className='nav-a' to={"/"}>
						<li className='nav-li'>
            <i className='fa-solid fa-house'></i>Home
						</li>
					</Link>
					<Link className='nav-a' to={"auth/login"}>
						<li className='nav-li'>
            <i className='fa-solid fa-house'></i>Home
						</li>
					</Link>
					<Link className='nav-a' to={"/course"}>
						<li className='nav-li'>
            <i className='fa-solid fa-house'></i>Home
						</li>
					</Link>
					<Link className='nav-a' to={"/login"}>
						<li className='nav-li'>
            <i className='fa-solid fa-house'></i>Home
						</li>
					</Link>
				</ul>
			</div>
		</header>
	);
};

export default Nav;