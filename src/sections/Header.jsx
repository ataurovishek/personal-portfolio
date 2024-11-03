

const Header = () => {
    return (
        <div className="flex justify-center w-full" id="">
            <nav className="fixed top-5 z-10 flex gap-1 p-0.5 border border-white/15 bg-white/5 rounded-full backdrop-blur">
                <a href="" className="nav-item">Home</a>
                <a href="#Project" className="nav-item">Projects</a>
                <a href="../Pages/About.jsx" className="nav-item">About</a>
                <a href="" className="nav-item">Articles</a>
                <a href="#Footer" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
            </nav>

        </div>
    );
};

export default Header;