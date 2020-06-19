import {getAllCountries} from '@components/countries/Countries'
import {renderCountries} from '@/index'
import {addClass, removeClass} from '@/utils'
import {createFilterFieldTemplate} from './filterField.template'

export let filterFieldCountriesArr = async () => await getAllCountries()

export async function FilterField() {
  const fieldWrapper =  createFilterFieldTemplate()
  const allCountries = await getAllCountries()
  let filteredCountriesArr

  fieldWrapper.childNodes.forEach(async item => {
    if (item.id === 'filterField') {
      item.addEventListener('input', async e => {
        filteredCountriesArr = []
        if (e.target.value.trim()) {
          allCountries.filter(country => {
            if (country.name.toLowerCase().startsWith(e.target.value.toLowerCase().trim())) {
              filteredCountriesArr.push(country)
            }
          })

          const app = document.getElementById('app')

          if (!filteredCountriesArr.length) {
            fieldWrapper.childNodes.forEach(async item => {
              if (item.id === 'error-message') {
                removeClass(item, 'display-none')
                addClass(item, 'display-block')
                fieldWrapper.style.borderRadius = '20px'
              }
            })
          } else {
            fieldWrapper.childNodes.forEach(async item => {
              if (item.id === 'error-message') {
                removeClass(item, 'display-block')
                addClass(item, 'display-none')
                fieldWrapper.style.borderRadius = '20px 20px 0 0'
              }
            })
          }

          app.childNodes.forEach(item => {
            if (item.id === 'countriesWrapper') {
              app.removeChild(item)
            }
          })

          filterFieldCountriesArr = () => filteredCountriesArr

          await renderCountries(filteredCountriesArr)
        }
      })
    }
  })

  return fieldWrapper
}