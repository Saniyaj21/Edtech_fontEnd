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
import Course from './pages/course/pages/course/Course';
import Profile from './pages/user/pages/Profile'
import Vedio from './pages/course/components/Vedio'

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
				<Route path='/profile' element={<Profile />} />
				<Route path='/auth/login' element={<Login />} />
				<Route path='/auth/register' element={<Register />} />
				<Route path='/admin/dashbord' element={<Dashbord />} />
                
				<Route path='/course' element={<Course />} />
                <Route path='/course/vedio' element={<Vedio />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>

      <Footer />
		</Router>
	);
}

export default App;
