import Navbar from "../components/landing/Navbar.jsx";
import Hero from "../components/landing/Hero.jsx";
import Features from "../components/landing/Features.jsx";
import About from "../components/landing/About.jsx";
import Preview from "../components/landing/Preview.jsx";
import Counter from "../components/landing/Counter.jsx";
import Footer from "../components/landing/Footer.jsx";

import "../style/landing.css";

export default function Landing() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <About />

      <Preview />

      <Counter />

      <Footer />
    </>
  );
}