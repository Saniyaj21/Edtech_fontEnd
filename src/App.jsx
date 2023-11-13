import './global.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/layout/error/ErrorPage";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Dashbord from "./pages/admin/dashbord/Dashbord";
import Nav from "./pages/layout/header/Header";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/slices/authSlice";
import { useEffect } from "react";
import Footer from "./pages/layout/footer/Footer";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	return (
		<Router>
			<Toaster />
			<Nav />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/auth/login' element={<Login />} />
				<Route path='/auth/register' element={<Register />} />
				<Route path='/admin/dashbord' element={<Dashbord />} />

				<Route path='*' element={<ErrorPage />} />
			</Routes>

      <Footer />
		</Router>
	);
}

export default App;
