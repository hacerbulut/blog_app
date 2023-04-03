import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import NavBar from "../components/Navbar"
import FooTer from "../components/FooTer"
import About from "../pages/About"


const AppRouter = () => {
  return (
    <Router>
     <NavBar/>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <FooTer/>
    </Router>
  )
}

export default AppRouter