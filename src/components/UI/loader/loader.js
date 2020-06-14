import '@/styles/loader.scss'

export function createLoader() {
  return `
   <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
   </div> 
  `
}