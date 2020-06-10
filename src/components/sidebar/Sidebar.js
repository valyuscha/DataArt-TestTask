import {addClass, removeClass} from '@/utils'
import {createSidebar} from './sidebar.template'

export function Sidebar() {
  const sidebar = createSidebar()

  const BTNS_WRAPPER_POSITION = 3
  const btnsWrapper = sidebar.childNodes[BTNS_WRAPPER_POSITION]

  let btn

  btnsWrapper.addEventListener('click', e => {
    const data = e.target.dataset
    data.label
      ? btn = e.target.previousSibling.previousSibling
      : data.btn
      ? btn = e.target
      : ''

    if (data.label || data.btn) {
      removeClassFromAllButtons(btnsWrapper, 'checked')
      addClass(btn, 'checked')
    }
  })

  return sidebar
}

function removeClassFromAllButtons(selector, className) {
  selector.childNodes.forEach(elem => {
    elem.childNodes.forEach(btn => {
      if (btn.nodeName !== '#text') {
        removeClass(btn, className)
      }
    })
  })
}