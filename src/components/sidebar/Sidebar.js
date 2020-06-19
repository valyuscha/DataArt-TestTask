import {getAllCountries} from '@/components/countries/Countries'
import {filteredCountriesArr} from '@/components/filterField/FilterField'
import {addClass, removeClass} from '@/utils'
import {renderCountries} from '@/index'
import {createLoaderTemplate, createLoaderWrapper} from '../UI/loader/loader'
import {createSidebarTemplate} from './sidebar.template'

export function Sidebar() {
  const sidebar = createSidebarTemplate()

  const BTNS_WRAPPER_POSITION = 3
  const btnsWrapper = sidebar.childNodes[BTNS_WRAPPER_POSITION]

  const buttons = getButtons(btnsWrapper)

  buttons.find(btn => {
    if (btn.textContent === 'All') {
      const radioBtn = btn.previousElementSibling
      addClass(radioBtn, 'checked')
      return btn
    }
  })

  let btn
  let filteredArrByRegion

  btnsWrapper.addEventListener('click', async e => {
    const data = e.target.dataset
    const app = document.getElementById('app')
    if (data.label) {
      btn = e.target.previousElementSibling
      filteredArrByRegion = await filterCountriesByRegion(e.target)
    } else if (data.btn) {
      btn = e.target
      filteredArrByRegion = await filterCountriesByRegion(e.target.nextElementSibling)
    }

    if (data.label || data.btn) {
      removeClassFromAllButtons(btnsWrapper, 'checked')
      addClass(btn, 'checked')

      const filterField = document.getElementById('filterField')
      filterField.value = ''


      app.childNodes.forEach(item => {
        if (item.id === 'countriesWrapper') {
          app.removeChild(item)
        }
      })

      const filterFieldWrapper = document.getElementById('filterFieldWrapper')
      filterFieldWrapper.style.borderRadius = '20px 20px 0 0'

      const errorMessage = document.getElementById('error-message')
      addClass(errorMessage, 'display-none')

      await renderCountries(await filteredArrByRegion)

      removeClass(filterFieldWrapper, 'display-none')
      addClass(filterFieldWrapper, 'display-block')
    }
  })

  return sidebar
}

function removeClassFromAllButtons(selector, className) {
  const buttons = getButtons(selector)
  buttons.forEach(btn => removeClass(btn, className))
}

function getButtons(selector) {
  const buttons = []
  selector.childNodes.forEach(elem => {
    elem.childNodes.forEach(btn => {
      if (btn.nodeName !== '#text') {
        buttons.push(btn)
      }
    })
  })

  return buttons
}

async function filterCountriesByRegion(selectedItem) {
  let allCountries = await getAllCountries()
  let countriesAfterFilter = allCountries

  return allCountries.filter(country => {
    if (country.region.toLowerCase() === selectedItem.textContent.toLowerCase()) {
      countriesAfterFilter = []
      countriesAfterFilter.push(country)
      return countriesAfterFilter
    } else if (selectedItem.textContent.toLowerCase() === 'all') {
      countriesAfterFilter = []
      countriesAfterFilter.push(country)
      return countriesAfterFilter
    }
  })
}