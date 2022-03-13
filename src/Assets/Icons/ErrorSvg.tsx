import React from 'react';

const ErrorSvg = () => {
  return (
    <svg
      width="172"
      height="172"
      viewBox="0 0 172 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_778_1299)">
        <circle cx="82" cy="78" r="62" fill="url(#paint0_linear_778_1299)" fillOpacity="0.2" />
        <circle cx="82" cy="78" r="49" fill="url(#paint1_linear_778_1299)" fillOpacity="0.2" />
        <circle cx="82" cy="78" r="35" stroke="url(#paint2_linear_778_1299)" strokeWidth="4" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84 63H80V67H84V63ZM84 73V71H80V73V94V96H84V94V73Z"
          fill="url(#paint3_linear_778_1299)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_778_1299"
          x="0"
          y="0"
          width="172"
          height="172"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="8" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0745098 0 0 0 0 0.0784314 0 0 0 0 0.14902 0 0 0 0.16 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_778_1299" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_778_1299"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_778_1299"
          x1="82"
          y1="16"
          x2="82"
          y2="140"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#981616" />
          <stop offset="1" stopColor="#D24F4F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_778_1299"
          x1="82"
          y1="29"
          x2="82"
          y2="127"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#981616" />
          <stop offset="1" stopColor="#D24F4F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_778_1299"
          x1="82"
          y1="41"
          x2="82"
          y2="115"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#981616" />
          <stop offset="1" stopColor="#D24F4F" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_778_1299"
          x1="82"
          y1="63"
          x2="82"
          y2="67"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#981616" />
          <stop offset="1" stopColor="#D24F4F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ErrorSvg;
