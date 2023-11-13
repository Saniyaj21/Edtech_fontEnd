import React from "react";
import "./Home.scss";
import BtnPrimary from "../componentStore/buttons/BtnPrimary";
function Home() {
	return (
		<div>
			<BtnPrimary
				btnText={"Hellow World"}
				icon={<i className='fa-solid fa-users'></i>}
			/>
		</div>
	);
}

export default Home;
