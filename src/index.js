import langmap from 'langmap';
import iso3311a2 from 'iso-3166-1-alpha-2';

const allLocales = [];
for (let code in langmap) {
    if (!langmap.hasOwnProperty(code)) continue;

    if (code.includes('-')) {
        let item = {
            locale: {
                iso_639: code.split('-')[0],
                iso_639_with_country: code,
                native_name: langmap[code].nativeName,
                english_name: langmap[code].englishName,
            },
            country: {
                iso_3166_1_alpha_2: code.split('-')[1],
                english_name: iso3311a2.getCountry(code.split('-')[1]),
            },
        };

        if (!item.country.english_name) continue;

        allLocales.push(item);
    }
}

export default class LocalesList {
    static getAllLocales () {
        return allLocales;
    }
    static getAllCountries () {
        return iso3311a2.getData();
    }
}
