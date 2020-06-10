import '@/styles/styles.scss'
import {Header} from '@components/header/Header'
import {Sidebar} from '@components/sidebar/Sidebar'

const app = document.getElementById('app')
app.append(Header())
app.append(Sidebar())