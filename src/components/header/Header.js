export function Header() {
  const header = document.createElement('div')
  header.classList.add('header')

  header.innerHTML = `
    <h1 class="header__name">
      Countries of the world
    </h1>
  `

  return header
}