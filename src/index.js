import {Header} from '@components/header/Header'
import {Sidebar} from '@components/sidebar/Sidebar'
import {FilterField} from '@/components/filterField/FilterField'

import {getAllCountries, Countries} from '@components/countries/Countries'
import {createLoaderTemplate, createLoaderWrapper} from '@components/UI/loader/loader'
import '@/styles/styles.scss'

const app = document.getElementById('app')
app.append(Header())

async function renderSidebar() {
  return app.append(await Sidebar())
}

async function renderFilterField() {
  return app.append(await FilterField())
}

export async function renderCountries(countries) {
  const countriesArr = await Countries(countries)
  app.append(countriesArr)
  return countriesArr
}

renderSidebar()

renderFilterField()


const renderedCountries = async () => {
  let loaderWrapper = createLoaderWrapper()
  loaderWrapper.innerHTML = createLoaderTemplate()
  app.append(loaderWrapper)
  await renderCountries(await getAllCountries())
  loaderWrapper.innerHTML = ''
}

renderedCountries()