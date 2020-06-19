import {addClass} from '@/utils.js'

export function createFilterFieldTemplate() {
  const wrapper = document.createElement('div')
  addClass(wrapper, 'filter-field__wrapper')
  wrapper.id = 'filterFieldWrapper'
  wrapper.innerHTML = `
      <h2>Country search by name</h2>
      <input id="filterField" class="filter-field" type="text" placeholder="Enter the name of that country which you search">
    <p id="error-message" class="message display-none">There is no such country(</p>`

  return wrapper
}