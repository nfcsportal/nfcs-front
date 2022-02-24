import React from 'react';

const TimelineSvg = () => {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_519_991"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="88"
        height="88"
      >
        <circle cx="44" cy="44" r="44" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_519_991)">
        <circle cx="44" cy="44" r="42" fill="#1B3A53" stroke="#00F2FB" strokeWidth="4" />
        <g style={{ mixBlendMode: 'color-dodge' }} filter="url(#filter0_f_519_991)">
          <path
            d="M37.9049 59.0299L14.7713 33.7436C13.2496 32.0803 13.4023 29.4887 15.1088 28.0156L32.432 13.0625C35.4558 10.4525 40.0168 13.399 38.8804 17.2284L35.4713 28.7173C34.9677 30.4146 35.6397 32.241 37.1233 33.2071L69.7688 54.4655C72.4548 56.2146 72.0955 60.2545 69.1429 61.502L38.7942 74.3251C34.7099 76.0508 31.2691 70.8381 34.4612 67.7608L37.7298 64.6096C39.291 63.1046 39.3686 60.6298 37.9049 59.0299Z"
            fill="url(#paint0_linear_519_991)"
            fillOpacity="0.64"
          />
        </g>
        <g clipPath="url(#clip0_519_991)">
          <path
            d="M27.3335 23.166V35.666H23.1668V23.166H27.3335ZM23.1668 64.8327V52.3327H27.3335V64.8327H23.1668ZM29.4168 43.9993C29.4168 46.3118 27.5627 48.166 25.2502 48.166C22.9585 48.166 21.0835 46.3118 21.0835 43.9993C21.0835 41.7077 22.9585 39.8327 25.2502 39.8327C27.5627 39.8327 29.4168 41.7077 29.4168 43.9993ZM52.3335 27.3327C61.5418 27.3327 69.0002 34.791 69.0002 43.9993C69.0002 53.2077 61.5418 60.666 52.3335 60.666C44.8335 60.666 38.5002 55.7077 36.396 48.8952L31.5002 43.9993L36.396 39.1035C38.5002 32.291 44.8335 27.3327 52.3335 27.3327ZM52.3335 31.4993C45.4377 31.4993 39.8335 37.1035 39.8335 43.9993C39.8335 50.8952 45.4377 56.4993 52.3335 56.4993C59.2293 56.4993 64.8335 50.8952 64.8335 43.9993C64.8335 37.1035 59.2293 31.4993 52.3335 31.4993ZM50.2502 46.0827V35.666H53.3752V44.416L59.6252 48.166L57.9168 50.791L50.2502 46.0827Z"
            fill="#F5F9FF"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_519_991"
          x="-30.2775"
          y="-31.9287"
          width="145.864"
          height="150.596"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="22" result="effect1_foregroundBlur_519_991" />
        </filter>
        <linearGradient
          id="paint0_linear_519_991"
          x1="10.0003"
          y1="82.3609"
          x2="84.1891"
          y2="79.5244"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38BCCE" />
          <stop offset="1" stopColor="#66A2D9" />
        </linearGradient>
        <clipPath id="clip0_519_991">
          <rect width="50" height="50" fill="white" transform="translate(19 19)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TimelineSvg;
