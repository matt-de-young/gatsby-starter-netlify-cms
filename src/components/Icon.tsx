import * as React from "react";

type IconProps = {
  name: string,
  strokeColor?: string,
  className?: string,
};

const Icon = ({ name, strokeColor="#FFF", className }: IconProps) => (
  <svg
    className={`icon ${className}`}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    stroke-width="4"
    stroke={strokeColor}
    fill-rule="evenodd"
  >
    {
      {
        'burger': <>
          <path d="M0,2 L48,2"></path>
          <path d="M0,22 L24,22"></path>
          <path d="M24,26 L48,26"></path>
          <path d="M0,44 L48,44"></path>
        </>,
        'multiply': <>
          <path d="M2,2 L46,46"></path>
          <path d="M2,46 L46,2"></path>
        </>,
        'arrow-right-circle': <>
          <circle stroke-width="2" cx="24" cy="24" r="23"></circle>
          <g transform="translate(14.149555, 15.575626)"stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <polyline transform="translate(13.797451, 7.650403) rotate(45.000000) translate(-13.797451, -7.650403) " points="8.32913534 2.29941536 19.2657674 2.18208696 19.148439 13.1187191"></polyline>
            <line x1="20.623213" y1="7.65040301" x2="0" y2="7.65040301"></line>
          </g>
        </>
      }[name]
    }
  </svg>
)

export default Icon
