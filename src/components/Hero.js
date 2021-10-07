import * as React from "react";
import PropTypes from "prop-types";
import BackgroundImage from 'gatsby-background-image'

import Button from "../components/Button";

const Hero = ({ image, text, button }) => (
  <div className={`hero `}>
    <div className="grid">
      <BackgroundImage fluid={image.childImageSharp.fluid}>
        <div className="grid relative bg-gradient-to-t from-black to-transparent" style={{gridArea: "1/1"}}>
          <div className="container flex mt-24 md:mt-32">
            <div className="self-end pt-24 pb-16 md:pt-36 md:pb-24">
                <span className="block pb-10 text-4xl max-w-3xl">{text}</span>
                { button.href && button.text &&
                  <Button href={button.href} text={button.text} /> 
                }
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  </div> 
);

Hero.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  text: PropTypes.string,
  button: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
};

export default Hero;
