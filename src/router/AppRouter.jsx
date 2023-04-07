import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import NavBar from "../components/Navbar"
import FooTer from "../components/FooTer"
import About from "../pages/About"
import NewBlog from "../pages/NewBlog"
import Detail from "../pages/Detail"
import  Dashboard  from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"



const AppRouter = () => {
  return (
    <Router>
     <NavBar/>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/about" element={<About />} />
            <Route path="/new-blog" element={<NewBlog />} />
            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <FooTer/>
    </Router>
  )
}

export default AppRouter