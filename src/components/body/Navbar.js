import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from '../assets/PHMVertical.png'
// import About from "../../about";
// import {
// 	BrowserRouter as Router,
//     Routes,
//     Route,
//     Navigate,
// } from "react-router-dom";
         
function Navbar() {    
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);

	};
	
   
	return (
		<header>
			
			<a href="/index.html">
		<img src={logo} alt="logo" className="App-logo" />	
		</a>
		{/* <>
		<Router>
                <Routes>
                   
                    <Route
                        exact
                        path="/about"
                        element={<About/>}
                    /> 
					</Routes>
            </Router>
			</>	 */}
        <nav ref={navRef}>
	
				<a href="/index.html" >Home </a>
				<a href="/about.html">About</a>
				<a href="/service.html">Services</a>
				<a href="/latest news">Latest News</a>
				<a href="/contact.html">Contact Us</a>
				<a href="/admin">Admin</a>


				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn nav-bars"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;