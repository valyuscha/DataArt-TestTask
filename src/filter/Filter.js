import {getAllCountries} from '../components/countries/Countries.js'
import {renderCountries} from '../index.js'



export async function Filter() {
  let currentList = []
  let initialCountriesArr = await getAllCountries()

  return function() {
    let tmp = []

    // currentList = []
    // console.log('0000000')

    const filterField = document.getElementById('filterField')
    filterField.addEventListener('input', e => {
      if (!e.target.value.trim()) {
        tmp = [...initialCountriesArr]
      } else {
        initialCountriesArr.filter(async country => {
          if (country.name.toLowerCase().startsWith(e.target.value.toLowerCase().trim())) {
            tmp.push(country)
          }
        })
      }

      currentList = tmp
      console.log('list', currentList)
      return currentList
    })

    // const sidebarBtnsWrapper = document.getElementById('btnsWrapper')
    // sidebarBtnsWrapper.addEventListener('click', async e => {
    //   const data = e.target.dataset
    //   if (data.label) {
    //     filteredCountriesArr = [...await filterCountriesByRegion(e.target)]
    //     console.log('111111111', filteredCountriesArr)
    //     await renderCountries()
    //
    //   } else if (data.btn) {
    //     filteredCountriesArr = [...await filterCountriesByRegion(e.target.nextElementSibling)]
    //     console.log('2222222222', filteredCountriesArr)
    //   }
    //
    //   console.log('Filtered9999999999: ', filteredCountriesArr)
    //   // return filteredCountriesArr
    // })
    //
    // console.log('Filter: ', filteredCountriesArr)
    // return filteredCountriesArr
  }
}

