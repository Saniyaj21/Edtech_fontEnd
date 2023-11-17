import React from "react";
import "./error.scss";
import sadEmoji from "../../../img/error.jpg";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		// i am in eoor page
		<div className='error'>
				<img src={sadEmoji} alt='emoji' height={"170px"} />

				<h1>Oops! Something went wrong</h1>

				<Link to={"/"}>
					<button className='E-btn'>Return <i class="fa-solid fa-house"></i></button>
				</Link>
		</div>
	);
}

export default ErrorPage;
