import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (

        <header className={`landing-navbar ${scrolled ? "scrolled" : ""}`}>

            <div className="container navbar-container">

                <Link
                    to="/"
                    className="logo"
                >

                    <img
                        src="/logo1.png"
                        alt="ExpenseX"
                    />

                    <span>ExpenseX</span>

                </Link>

                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

                    <a href="#home" onClick={closeMenu}>Home</a>

                    <a href="#features" onClick={closeMenu}>Features</a>

                    <a href="#about" onClick={closeMenu}>About</a>

                </nav>

                <div className="nav-buttons">

                    <Link
                        to="/auth?mode=login"
                        className="login-btn"
                    >
                        Login
                    </Link>

                    <Link
                        to="/auth?mode=register"
                        className="primary-btn"
                    >
                        Get Started
                    </Link>

                </div>

                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    <i className={`ti ${menuOpen ? "ti-x" : "ti-menu-2"}`}></i>

                </button>

            </div>

        </header>

    );

}