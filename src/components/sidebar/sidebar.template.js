import {addClass} from '@/utils.js'

let buttonsWrapper

export function createSidebarTemplate() {
  const sidebar = document.createElement('div')
  addClass(sidebar, 'sidebar')
  sidebar.id = 'sidebar'
  sidebar.innerHTML = createSidebarName()

  buttonsWrapper = document.createElement('div')
  buttonsWrapper.classList.add('sidebar__buttons')
  buttonsWrapper.id = 'btnsWrapper'
  createSidebarButtons()

  sidebar.appendChild(buttonsWrapper)

  return sidebar
}

function createSidebarName() {
  return `
    <h2 class="sidebar__name">
      Countries of which region would you like to see?
    </h2>
  `
}

const sidebarButtons = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

function createSidebarButtons() {
  return sidebarButtons.map(btn => {
    const button = `
      <div class="sidebar__button">
        <button data-btn="btn"></button>
        <p data-label="label">${btn}</p>
      </div>
    `

    buttonsWrapper.insertAdjacentHTML('beforeend', button)

    return buttonsWrapper
  })
}