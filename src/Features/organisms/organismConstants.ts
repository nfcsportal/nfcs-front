import BinanceFutureSvg from '../../Assets/Icons/cards/BinanceFutureSvg';
import CryptoSvg from '../../Assets/Icons/cards/CryptoSvg';
import NftSvg from '../../Assets/Icons/cards/NftSvg';
import StockSvg from '../../Assets/Icons/cards/StockSvg';
import { THomeCards } from './organismsTypes';

export const HOME_CARDS: THomeCards[] = [
  {
    icon: BinanceFutureSvg,
    title: 'home.cards.futures.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
  },
  {
    icon: NftSvg,
    title: 'home.cards.nft.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
  },
  {
    icon: StockSvg,
    title: 'home.cards.stock.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
  },
  {
    icon: CryptoSvg,
    title: 'home.cards.crypto.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
  },
];
