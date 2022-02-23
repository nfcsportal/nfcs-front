import React from 'react';

const StockSvg = () => {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_519_963"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="112"
        height="112"
      >
        <circle cx="56" cy="56" r="56" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_519_963)">
        <g filter="url(#filter0_d_519_963)">
          <circle cx="56" cy="56" r="52" fill="#241D48" />
          <circle cx="56" cy="56" r="54" stroke="#7B43E4" strokeWidth="4" />
        </g>
        <g style={{ mixBlendMode: 'color-dodge' }} filter="url(#filter1_f_519_963)">
          <path
            d="M54.2462 75.3605L26.5913 45.1322C25.0696 43.4689 25.2223 40.8773 26.9289 39.4042L49.1261 20.244C52.1499 17.6339 56.7108 20.5804 55.5745 24.4098L50.876 40.2441C50.3723 41.9414 51.0444 43.7679 52.528 44.734L91.7397 70.2682C94.4258 72.0173 94.0664 76.0572 91.1138 77.3048L51.7176 93.9506C47.6333 95.6763 44.1925 90.4636 47.3846 87.3863L54.0711 80.9402C55.6322 79.4352 55.7099 76.9604 54.2462 75.3605Z"
            fill="url(#paint0_linear_519_963)"
            fillOpacity="0.88"
          />
        </g>
        <path d="M29.5 63.5H39.5V85.5H29.5V63.5Z" stroke="#FBFCFF" strokeWidth="3" />
        <path d="M49.5 53.5H59.5V85.5H49.5V53.5Z" stroke="#FBFCFF" strokeWidth="3" />
        <path
          d="M81.4766 44.5391H79.9766V46.0391V85.0625H69.6172V46.0391V44.5391H68.1172H64.2403L74.7969 28.7042L85.3535 44.5391H81.4766Z"
          stroke="#FBFCFF"
          strokeWidth="3"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_519_963"
          x="-20"
          y="-16"
          width="160"
          height="160"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_519_963" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_519_963"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_f_519_963"
          x="-18.4575"
          y="-24.7473"
          width="156.015"
          height="163.04"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="22" result="effect1_foregroundBlur_519_963" />
        </filter>
        <linearGradient
          id="paint0_linear_519_963"
          x1="21.5048"
          y1="101.932"
          x2="107.445"
          y2="98.6459"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38BCCE" />
          <stop offset="0.328125" stopColor="#6463DC" />
          <stop offset="1" stopColor="#7541E2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StockSvg;
