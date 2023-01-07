const btn = document.querySelector('.btn-selection')
const ul = document.querySelector('.list-city')
let buttonFunc = () => {
btn.classList.toggle('clicked')
ul.classList.toggle('show')
}
btn.addEventListener('click', buttonFunc)