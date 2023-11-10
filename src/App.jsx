import 'react-router-dom'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home/Home'
import ErrorPage from './pages/error/ErrorPage';
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register';
import Dashbord from './pages/admin/dashbord/Dashbord';
import Course from './pages/course/Course'
import Nav from './pages/headers/nav/Nav';

function App() {
  
return(
<Router>
  <Toaster></Toaster>
  <Nav></Nav>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/auth/login' element={<Login />} />
    <Route path='/auth/register' element={<Register />} />
    <Route path='/admin/dashbord' element={<Dashbord />} />
    <Route path='/course' element={<Course />} />
    <Route path='*' element={<ErrorPage />} />
  </Routes>
</Router>
)
}

export default App
