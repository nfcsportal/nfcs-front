import React from 'react';

import CryptoBigSvg from '../Assets/Icons/CryptoBigSvg';

export type TDescriptions = {
  current: string;
  icon: React.FC;
};

export const DESCRIPTIONS: TDescriptions[] = [
  {
    current: 'stock',
    icon: CryptoBigSvg,
  },
  {
    current: 'nft',
    icon: CryptoBigSvg,
  },
  {
    current: 'futures',
    icon: CryptoBigSvg,
  },
  {
    current: 'crypto',
    icon: CryptoBigSvg,
  },
];
