import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import NavBar from "../components/Navbar"
import FooTer from "../components/FooTer"
import About from "../pages/About"
import NewBlog from "../pages/NewBlog"


const AppRouter = () => {
  return (
    <Router>
     <NavBar/>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/new-blog" element={<NewBlog />} />
        </Routes>
        <FooTer/>
    </Router>
  )
}

export default AppRouter