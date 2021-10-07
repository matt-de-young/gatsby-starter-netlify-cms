import * as React from "react";
import { Link } from "gatsby";

import logoWhite from "../img/logo-white.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer text-white mt-auto pt-6">
        <div className="container flex items-center justify-between py-5 md:py-7">
          <div className="md:max-w-xs">
            <Link to="/" className="block w-28 md:w-48 pb-6" title="Logo">
              <img src={logoWhite} alt="GDI"/>
            </Link>
            <nav className="grid grid-cols-2 gap-x-8 pb-6 md:hidden">
              <Link className="inline-block py-1" to="/about">About</Link>
              <Link className="inline-block py-1" to="/products">Products</Link>
              <Link className="inline-block py-1" to="/blog">Blog</Link>
              <Link className="inline-block py-1" to="/contact">Contact</Link>
              <Link className="inline-block py-1" to="/contact/examples">Form Examples</Link>
            </nav>
            <hr className="border-t border-t-gray-400 pb-6 md:hidden" />
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <nav className="hidden md:grid grid-cols-2 gap-x-16">
            <Link className="inline-block py-1" to="/about">About</Link>
            <Link className="inline-block py-1" to="/products">Products</Link>
            <Link className="inline-block py-1" to="/blog">Blog</Link>
            <Link className="inline-block py-1" to="/contact">Contact</Link>
            <Link className="inline-block py-1" to="/contact/examples">Form Examples</Link>
          </nav>
        </div>
      </footer>
    );
  }
};

export default Footer;
