import "./global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/layout/error/ErrorPage";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Nav from "./pages/layout/header/Header";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/slices/authSlice";
import { useEffect } from "react";
import Footer from "./pages/layout/footer/Footer";
import Profile from './pages/user/pages/Profile';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <Router>
            <Toaster />
            <Nav />

<<<<<<< HEAD
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
=======
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/auth/login' element={<Login />} />
				<Route path='/auth/register' element={<Register />} />
				<Route path='/admin/dashbord' element={<Dashbord />} />
>>>>>>> d4100908a8b2c93734b5f30940db8b63cf57c951

                <Route path="*" element={<ErrorPage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
