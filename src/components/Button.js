import * as React from "react";
import PropTypes from "prop-types";

const Button = ({ href, text }) => (
  <button href={href} className="bg-primary px-10 py-3 rounded-full">{text}</button>
);

Button.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
