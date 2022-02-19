import React from 'react';

export const ElipsCenter: React.FC = () => {
  return (
    <svg
      width="177"
      height="177"
      viewBox="0 0 177 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_421_322)">
        <path
          d="M177 88.5C177 137.377 137.377 177 88.5 177C39.6228 177 0 137.377 0 88.5C0 39.6228 39.6228 0 88.5 0C137.377 0 177 39.6228 177 88.5Z"
          fill="url(#paint0_linear_421_322)"
          fillOpacity="0.64"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_421_322"
          x="0"
          y="-16"
          width="177"
          height="193"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-24" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.101961 0 0 0 0 0.716863 0 0 0 0 0.980392 0 0 0 0.16 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_421_322" />
        </filter>
        <linearGradient
          id="paint0_linear_421_322"
          x1="88.5"
          y1="0"
          x2="88.5"
          y2="177"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#182551" />
          <stop offset="1" stopColor="#114582" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
