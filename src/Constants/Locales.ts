import german from '../../src/Assets/Locales/de.json';
import english from '../../src/Assets/Locales/en.json';
import french from '../../src/Assets/Locales/fr.json';
import { JSONObject } from '../Types/global';

export const LOCALES: { [key: string]: JSONObject } = {
  ['en']: english,
  ['de']: german,
  ['fr']: french,
};
