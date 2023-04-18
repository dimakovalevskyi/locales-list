# locales-list

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
[![Made in Ukraine](https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7)](https://stand-with-ukraine.pp.ua)


List of locales with ISO 639-1, ISO 639-1 with ISO 3166-1.

## Notice

This library is not reliable complete or comprehensive. The data for this package is collected from two packages: a list of locales with a country code from the data of the [mozilla/language-mapping-list](https://github.com/mozilla/language-mapping-list) and a list of countries from [ISO 3166-1 alpha-2](https://github.com/georgzoeller/iso-3166-1-alpha-2).

This package contains information **only about locales** that have xx-XX format, locales for which the format does not have a country code are ignored here.

## Install

```
npm install locales-list
```


## Methods


### getAllLocales() 
  - @return {array}

Return array of all locales with country. This method returns information **only about locales** that have xx-XX format, locales for which the format does not have a country code are ignored here.

### getAllCountries() 
  - @return {object}

Return object with all countries from [ISO 3166-1 alpha-2](https://github.com/georgzoeller/iso-3166-1-alpha-2).

## Usage

```
const LocalesList = require('locales-list');
// or
import LocalesList from 'locales-list';

console.log(LocalesList.getAll());
```
