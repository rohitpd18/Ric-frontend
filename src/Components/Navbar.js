import React, { useEffect } from "react";
import logo from "../Assets/Image/logo.png";
import AOS from "aos";
import '../Assets/Css/Navbar.css'

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Sticky nav bar
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").classList.add("bg-light", "shadow");
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    if (currentScrollpos === 0) {
      document.getElementById("navbar").classList.remove("bg-light", "shadow");
    }
    console.log(prevScrollpos);
    console.log(currentScrollpos);
    prevScrollpos = currentScrollpos;
  };
  return (
    <div>
      {/* Nav bar */}
      <nav id="navbar">
        <a href="/" className="logo" data-aos="fade-right">
          <img src={logo} alt="" />
        </a>
        <div className="bx bx-menu" id="menu-icon"></div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i style={{color: "black"}}
            className="fas fa-bars "
          ></i>
        </label>
        <ul data-aos="fade-left">
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Members</a>
          </li>
          <li>
            <a href="/">Admin Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
