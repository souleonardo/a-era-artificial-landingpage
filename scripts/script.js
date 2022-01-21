const button = document.querySelector('.btn-fixed')

window.addEventListener('scroll', function (event) {
  if (window.scrollY < 100) {
    button.classList.remove('visible')
  } else {
    button.classList.add('visible')
  }
})
