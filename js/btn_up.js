const btn = document.querySelector('.btn-up');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

window.addEventListener('scroll', function () {
  const button = document.querySelector('.btn-up');

  if (window.scrollY >= 300) {
    button.style.display = 'block'; 
  } else {
    button.style.display = 'none'; 
  }
});