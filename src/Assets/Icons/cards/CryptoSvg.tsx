import React from 'react';

const CryptoSvg = () => {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_564_3742"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="112"
        height="112"
      >
        <path
          d="M112 56C112 86.9279 86.9279 112 56 112C25.0721 112 0 86.9279 0 56C0 25.0721 25.0721 0 56 0C86.9279 0 112 25.0721 112 56Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_564_3742)">
        <g filter="url(#filter0_d_564_3742)">
          <path
            d="M108 56C108 84.7188 84.7188 108 56 108C27.2812 108 4 84.7188 4 56C4 27.2812 27.2812 4 56 4C84.7188 4 108 27.2812 108 56Z"
            fill="#09253C"
          />
          <path
            d="M56 110C85.8234 110 110 85.8234 110 56C110 26.1766 85.8234 2 56 2C26.1766 2 2 26.1766 2 56C2 85.8234 26.1766 110 56 110Z"
            stroke="#18AAFC"
            strokeWidth="4"
          />
        </g>
        <g style={{ mixBlendMode: 'color-dodge' }} filter="url(#filter1_f_564_3742)">
          <path
            d="M51.1192 72.3604L23.4644 42.1321C21.9427 40.4688 22.0954 37.8772 23.8019 36.4042L45.9991 17.2439C49.0229 14.6338 53.5839 17.5803 52.4476 21.4098L47.749 37.2441C47.2454 38.9414 47.9174 40.7678 49.401 41.7339L88.6128 67.2681C91.2988 69.0172 90.9394 73.0572 87.9869 74.3047L48.5906 90.9505C44.5064 92.6762 41.0655 87.4635 44.2576 84.3862L50.9442 77.9401C52.5053 76.4351 52.5829 73.9603 51.1192 72.3604Z"
            fill="#18AFFC"
          />
        </g>
        <path
          d="M72.8596 45.5949L73.2958 46.3273L74.1483 46.3273L85.1838 46.3272L87.3544 46.3272L86.5869 44.2968C81.8159 31.6762 69.4768 22.5 55.22 22.5C36.8212 22.5 21.5 37.4825 21.5 56C21.5 74.5175 36.8212 89.5 55.22 89.5C69.4624 89.5 81.8106 80.526 86.5869 67.8914L87.3544 65.861H85.1838H74.1483H73.2958L72.8596 66.5934C69.2409 72.6687 62.6624 77.0303 55.22 77.0303C43.9458 77.0303 35.0517 67.4813 35.0517 56C35.0517 44.6031 43.8633 35.9109 55.22 35.9109C62.7602 35.9109 69.2928 39.6068 72.8596 45.5949ZM91.5189 53.4578L95.3475 50.7354H90.6497H66.6565C64.6343 46.4006 60.2344 43.3942 55.1288 43.3942C48.1096 43.3942 42.4167 49.0786 42.4167 56.0942C42.4167 63.1097 48.1096 68.7942 55.1288 68.7942C60.1602 68.7942 64.5035 65.8732 66.5636 61.6412H79.5317H80.0106L80.401 61.3637L91.5189 53.4578Z"
          stroke="#FBFCFF"
          strokeWidth="3"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_564_3742"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_564_3742" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_564_3742"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_f_564_3742"
          x="-21.5845"
          y="-27.7476"
          width="156.015"
          height="163.04"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="22" result="effect1_foregroundBlur_564_3742" />
        </filter>
      </defs>
    </svg>
  );
};

export default CryptoSvg;
