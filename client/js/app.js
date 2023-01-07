const btn = document.querySelector('.btn')
const ul = document.querySelector('.list')
let buttonFunc = () => {
btn.classList.toggle('active')
ul.classList.toggle('active')
}
btn.addEventListener('click', buttonFunc)