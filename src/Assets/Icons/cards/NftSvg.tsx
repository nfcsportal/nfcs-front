import React from 'react';

const NftSvg = () => {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_519_964"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="112"
        height="112"
      >
        <circle cx="56" cy="56" r="56" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_519_964)">
        <g filter="url(#filter0_d_519_964)">
          <circle cx="56" cy="56" r="52" fill="#1B3A53" />
          <circle cx="56" cy="56" r="54" stroke="#00F2FB" strokeWidth="4" />
        </g>
        <g style={{ mixBlendMode: 'color-dodge' }} filter="url(#filter1_f_519_964)">
          <path
            d="M53.5919 73.3605L25.937 43.1322C24.4153 41.4689 24.568 38.8773 26.2746 37.4042L48.4718 18.244C51.4956 15.6339 56.0565 18.5804 54.9202 22.4098L50.2217 38.2441C49.718 39.9414 50.3901 41.7679 51.8737 42.734L91.0854 68.2682C93.7715 70.0173 93.4121 74.0572 90.4595 75.3048L51.0633 91.9506C46.979 93.6763 43.5382 88.4636 46.7303 85.3863L53.4168 78.9402C54.978 77.4352 55.0556 74.9604 53.5919 73.3605Z"
            fill="url(#paint0_linear_519_964)"
            fillOpacity="0.64"
          />
        </g>
        <path
          d="M49.0595 39V38H48.0595H44.3951H43.3951V39V61.5728L29.7862 44.5299L29.486 44.1538H29.0048H26H25V45.1538V71V72H26H29.6644H30.6644V71V54.5811L44.2732 71.624L44.5735 72H45.0547H48.0595H49.0595V71V39ZM68.2792 57.3754V56.3754H67.2792H59.8019V43.2123H85H86V42.2123V39V38H85H55.1376H54.1376V39V71V72H55.1376H58.8019H59.8019V71V61.5508H67.2792H68.2792V60.5508V57.3754ZM64.7338 50.9607V51.9607H65.7338H73.5283V71V72H74.5283H78.156H79.156V71V51.9607H86.9505H87.9505V50.9607V47.7484V46.7484H86.9505H65.7338H64.7338V47.7484V50.9607Z"
          stroke="#FBFCFF"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_519_964"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_519_964" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_519_964"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_f_519_964"
          x="-19.1118"
          y="-26.7473"
          width="156.015"
          height="163.04"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="22" result="effect1_foregroundBlur_519_964" />
        </filter>
        <linearGradient
          id="paint0_linear_519_964"
          x1="20.8505"
          y1="99.9317"
          x2="106.791"
          y2="96.6459"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38BCCE" />
          <stop offset="1" stopColor="#66A2D9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NftSvg;
