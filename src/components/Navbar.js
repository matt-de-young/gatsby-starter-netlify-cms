import * as React from "react";
import { Link } from "gatsby";

import burger from "../img/burger.svg";
import circleArrowRight from "../img/circle-arrow-right.svg";
import logoWhite from "../img/logo-white.svg";
import close from "../img/x.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggleSmNav = () => {
    this.setState(
      {
        active: !this.state.active,
      },
    );
  };

  render() {
    return (
      <nav
        role="navigation"
        aria-label="main-navigation"
        className="text-white"
      >
        <div className="container flex items-center justify-between py-5 md:py-7">
          <Link to="/" className="block w-28 md:w-48" title="Logo">
            <img src={logoWhite} alt="GDI"/>
          </Link>
          <div
            className={`navbar-burger h-6 w-6 md:hidden cursor-pointer`}
            data-target="smNavMenu"
            role="menuitem"
            tabIndex={0}
            onKeyPress={() => this.toggleSmNav()}
            onClick={() => this.toggleSmNav()}
          >
            {this.state.active
              ? <img src={close} alt="Close Menu"/>
              : <img src={burger} alt="Open Menu"/>
            }
          </div>
          <div id="navMenu" className="navbar-menu hidden md:block">
            <Link className="inline-block py-1 pr-3" to="/about">About</Link>
            <Link className="inline-block py-1 px-3" to="/products">Products</Link>
            <Link className="inline-block py-1 px-3" to="/blog">Blog</Link>
            <Link className="inline-block py-1 px-3" to="/contact">Contact</Link>
            <Link className="inline-block py-1 pl-3" to="/contact/examples">Form Examples</Link>
          </div>
        </div>
        <div id="smNavMenu" className={`navbar-menu container ${this.state.active ? "block" : "hidden"} md:hidden`}>
          <Link className="block text-3xl my-7 flex items-center justify-between" to="/about">
            <span>About</span>
            <img src={circleArrowRight} className="w-12 h-12" alt="About"/>
          </Link>
          <Link className="block text-3xl my-7 flex items-center justify-between" to="/products">
            <span>Products</span>
            <img src={circleArrowRight} className="w-12 h-12" alt="Products"/>
          </Link>
          <Link className="block text-3xl my-7 flex items-center justify-between" to="/blog">
            <span>Blog</span>
            <img src={circleArrowRight} className="w-12 h-12" alt="Blog"/>
          </Link>
          <Link className="block text-3xl my-7 flex items-center justify-between" to="/contact">
            <span>Contact</span>
            <img src={circleArrowRight} className="w-12 h-12" alt="Contact"/>
          </Link>
          <Link className="block text-3xl my-7 flex items-center justify-between" to="/contact/examples">
            <span>Form Examples</span>
            <img src={circleArrowRight} className="w-12 h-12" alt="Form Examples"/>
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
