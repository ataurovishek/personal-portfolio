import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, } from "react-router-dom";


const Header = () => {
    return (
        <Router>
            <div className="flex justify-center w-full" id="">
                <nav className="fixed top-5 z-10 flex gap-1 p-0.5 border border-white/15 bg-white/5 rounded-full backdrop-blur">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : "nav-item")}>Home</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : "nav-item")}>Projects</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : "nav-item")}>About</NavLink>
                    <NavLink to="/articles" className={({ isActive }) => (isActive ? "nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : "nav-item")}>Articles</NavLink>
                    <NavLink to="/Footer" className={({ isActive }) => (isActive ? "nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : "nav-item")}>Contact</NavLink>
                </nav>
            </div>
        </Router>
    );
};

export default Header;