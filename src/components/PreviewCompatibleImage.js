import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <div>
        <h3>image.childImageSharp.gatsbyImageData</h3>
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          style={imageStyle}
          alt={alt} />
      </div>
    );
  }

  if (!!childImageSharp) {
    return (
      <div>
        <h3>childImageSharp.gatsbyImageData</h3>
        <GatsbyImage image={childImageSharp.gatsbyImageData} style={imageStyle} alt={alt} />
      </div>
    );
  }

  if (!!image && typeof image === "string")
    return (
      <div>
        <h3>image</h3>
        <img style={imageStyle} src={image} alt={alt} />
      </div>
    );

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
