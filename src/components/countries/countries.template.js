import {addClass} from '@/utils'

export async function returnCountriesTemplate(countries) {
  return await createCountries(countries)
}

export async function createCountries(countries) {
  const countriesWrapper = createCountriesWrapper()
  const filterField = document.getElementById('filterFieldWrapper')

  if (!countries.length) {
    countriesWrapper.style.opacity = '0'
  } else {
    filterField.style.opacity = '1'
    countriesWrapper.style.opacity = '1'
  }

  countries.map(country => {
    countriesWrapper.insertAdjacentHTML('beforeend', createCountryTemplate(country))
  })

  return countriesWrapper
}

function createCountriesWrapper() {
  const countriesWrapper = document.createElement('div')
  countriesWrapper.id = 'countriesWrapper'
  addClass(countriesWrapper, 'countries__wrapper')

  return countriesWrapper
}

function createCountryTemplate(country) {
  const mainInfo = createMainInfo(country)
  const mainHiddenInfo = getMainHiddenInfo(country)
  const timezones = getTimezonesList(country)
  const currencies = getCurrencies(country)
  const translations = getTranslations(country)

  const timezonesList = createListWithInfo('timezones__wrapper', 'Timezones', timezones)
  const currenciesList = createListWithInfo('currencies__wrapper', 'Currencies', currencies)
  const translationList = createListWithInfo('translations__wrapper', 'Translations', translations)

  return `
    <div class="country__wrapper" data-type="country">
      ${mainInfo} 
      <div class="hidden-info__wrapper">
        ${mainHiddenInfo} 
        ${timezonesList} 
        ${currenciesList} 
        ${translationList}
      </div>
    </div>
  `
}

function createMainInfo(country) {
  return `
    <div class="main-info__wrapper">
      <img src="${country.flag}" alt="">
      <h3>${country.name}</h3> 
    </div> 
  `
}

function getMainHiddenInfo(country) {
  const mainInfo = [
    {label: 'Capital', value: country.capital},
    {label: 'Region', value: country.region},
    {label: 'Population', value: country.population}
  ]

  return mainInfo.map(item => `<p>${item.label}: <span>${item.value}</span></p>`).join(' ')
}

function createListWithInfo(classes, label, list) {
  return `
    <div class="${classes}">
      <p>${label}:</p>
      <ul>
        ${list}
      </ul>
    </div> 
  `
}

function getTimezonesList(country) {
  return country.timezones.map((item, index) => `<li>${++index}. ${item}</li>`).join(' ')
}

function getCurrencies(country) {
  return country.currencies.map(item => `<li><span>${item.code}:</span> ${item.symbol}</li>`).join(' ')
}

function getTranslations(country) {
  const translationsCollection = [
    {language: 'DE', value: country.translations.de},
    {language: 'ES', value: country.translations.es},
    {language: 'IT', value: country.translations.it}
  ]

  return translationsCollection.map(translation => {
    return `<li><span>${translation.language}:</span> ${translation.value}</li>`
  }).join(' ')
}