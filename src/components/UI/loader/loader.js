import '@/styles/loader.scss'

export function createLoaderWrapper() {
  return document.createElement('div')
}

export function createLoaderTemplate() {
  return `
   <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
   </div> 
  `
}