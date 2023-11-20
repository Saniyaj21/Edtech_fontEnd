import { useSelector } from "react-redux";
import "./profile.scss";
import { selectUser } from "../../../redux/slices/authSlice";

function Profile() {
	const { user } = useSelector(selectUser);
	console.log(user);

	9;
	return (
		<main>
			User profile:
			<div>
				<img src={user.avatar.url} alt={user?.avatar.public_id} />
			</div>
			<p>Name : {user?.name}</p>
			<p>Email : {user?.email}</p>
			<p>Role : {user?.role}</p>
			<p>Joined : {user?.createdAt}</p>
		</main>
	);
}

export default Profile;
