import * as en from './languages/en.json';
import * as de from './languages/de.json';
import * as fr from './languages/fr.json';
import * as ru from './languages/ru.json';
import * as pl from './languages/pl.json';
import * as sk from './languages/sk.json';
import * as hu from './languages/hu.json';
import * as da from './languages/da.json';
import * as es from './languages/es.json';
import * as tr from './languages/tr.json';
import * as it from './languages/it.json';
import * as da from './languages/da.json';
import * as pt from './languages/pt.json';
import * as cn from './languages/cn.json';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages: any = {
  en: en,
  de: de,
  fr: fr,
  ru: ru,
  sk: sk,
  hu: hu,
  pl: pl,
  da: da,
  es: es,
  tr: tr,
  it: it,
  da: da,
  pt: pt,
  cn: cn
};

export function localize(string: string, search = '', replace = ''): string {
  const lang = (localStorage.getItem('selectedLanguage') || navigator.language).replace(/['"]+/g, '').replace('-', '_');

  let translated: string;

  try {
    translated = string.split('.').reduce((o, i) => o[i], languages[lang]);
  } catch (e) {
    translated = string.split('.').reduce((o, i) => o[i], languages['en']);
  }

  if (translated === undefined) translated = string.split('.').reduce((o, i) => o[i], languages['en']);

  if (search !== '' && replace !== '') {
    translated = translated.replace(search, replace);
  }
  return translated;
}
