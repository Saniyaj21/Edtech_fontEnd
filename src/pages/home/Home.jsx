import React from "react";
import "./Home.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/authSlice";
function Home() {
	const { user } = useSelector(selectUser);
	return (
		<main>
			<div id='home'>
				{user ?<p>Welcome {user?.name}!</p> :""}
			</div>
		</main>
	);
}

export default Home;
