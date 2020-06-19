import '@/styles/styles.scss'
import {FilterField} from '@/components/filterField/FilterField'
import {Header} from '@components/header/Header'
import {Sidebar} from '@components/sidebar/Sidebar'
import {Countries} from '@/components/countries/Countries'
import {getAllCountries} from './components/countries/Countries.js'
import {createLoaderTemplate, createLoaderWrapper} from './components/UI/loader/loader.js'

const app = document.getElementById('app')
app.append(Header())
// app.append(Sidebar())

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