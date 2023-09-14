
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Home from  "./Home"
import Portfolio from "./Portfolio"
import Blog from "./Blog"
import Contact from "./Contact"

function NavBar() {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar">
                    <h1 className="logo">gilbert~ku</h1>
                    <ul className="nav-link">
                        <li><Link to="/"> Home</Link></li>
                        <li><Link to="/Portfolio">Portfolio</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                    
                </nav>
                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Portfolio" element={< Portfolio/>} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
            {/* <Footer>
                <h3>copyright gilbert-ku last update - 2023</h3>
            </Footer> */}
        </>
    )

}

export default NavBar;