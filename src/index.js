import '@/styles/styles.scss'
import {Header} from '@components/header/Header'
import {Sidebar} from '@components/sidebar/Sidebar'
import {Countries} from '@/components/countries/Countries'

const app = document.getElementById('app')
app.append(Header())
app.append(Sidebar())

export async function renderCountries() {
  const countries = await Countries()
  return app.append(countries)
}

renderCountries()