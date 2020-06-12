import planetImg from '@/assets/img/page-background.jpg'
import {returnCountriesTemplate} from './countries.template.js'

export async function Countries() {
  return await returnCountriesTemplate()
}

export async function getAllCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const countriesFromApi = await res.json()
  countriesFromApi.length = 12

  return countriesFromApi.map(country => {
    const currencies = country.currencies.map(item => {
      return {
        code: item.code,
        symbol: item.symbol
      }
    })
    return {
      flag: country.flag || planetImg,
      name: country.name || 'It\'s strange, but this country hasn\'t name)))',
      capital: country.capital || 'This country hasn\'t capital)',
      region: country.region || 'This country is located on unknown region)',
      population: country.population || 'We haven\'t information about the population of this country(',
      timezones: country.timezones || 'We haven\'t information about the timezones of this country(',
      currencies: currencies || 'We haven\'t information about the currencies of this country(',
      translations: {
        de: country.translations.de || 'We haven\'t translation for this country(',
        es: country.translations.es || 'We haven\'t translation for this country(',
        it: country.translations.it || 'We haven\'t translation for this country('
      } || 'We haven\'t translations for this country('
    }
  })
}