const btns = document.querySelectorAll('.btn-toggle')
btns.forEach(btn => {
  console.log(btn)  
  let buttonFunc = () => {
    btn.classList.toggle('clicked')
  }
  btn.addEventListener('click', buttonFunc)
})
console.log(btns)

const heart = document.querySelector('.btn-marker')
let heartFunc = () => {
  const span = heart.querySelector('span')
  heart.classList.toggle('active')
  if (heart.classList.contains('active')) {
    span.textContent = 'Добавлено'
  } else {
    span.textContent ='В закладки'
  }
}  
heart.addEventListener('click', heartFunc)

const tiles = document.querySelector('.btn-tiles')
let tilesFunc =() => {
    tiles.classList.toggle('active')
  }
tiles.addEventListener('click', tilesFunc)

