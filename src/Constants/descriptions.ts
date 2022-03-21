import React from 'react';

import BinanceFutureBigSvg from '../Assets/Icons/BinanceFutureBigSvg';
import CryptoBigSvg from '../Assets/Icons/CryptoBigSvg';
import NftBigSvg from '../Assets/Icons/NftBigSvg';
import StockBigSvg from '../Assets/Icons/StockBigSvg';

export type TDescriptions = {
  current: string;
  icon: React.FC;
};

export const DESCRIPTIONS: TDescriptions[] = [
  {
    current: 'stock',
    icon: StockBigSvg,
  },
  {
    current: 'nft',
    icon: NftBigSvg,
  },
  {
    current: 'futures',
    icon: BinanceFutureBigSvg,
  },
  {
    current: 'crypto',
    icon: CryptoBigSvg,
  },
];
