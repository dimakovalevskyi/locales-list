# locales-list

List of locales with ISO 639-1, ISO 639-1 with ISO 3166-1.

## Notice

This library is not reliable complete or comprehensive. The data for this package is collected from two packages: a list of locales with a country code from the data of the [mozilla/language-mapping-list](https://github.com/mozilla/language-mapping-list) and a list of countries from [ISO 3166-1 alpha-2](https://github.com/georgzoeller/iso-3166-1-alpha-2).

This package contains information **only about locales** that have xx-XX format, locales for which the format does not have a country code are ignored here.

## Install

```
npm install locales-list
```


## Methods


### getAll() 
  - @return {array}

Return array of all locales

## Usage

```
const LocalesList = require('locales-list');
// or
import LocalesList from 'locales-list';

console.log(LocalesList.getAll());
```
