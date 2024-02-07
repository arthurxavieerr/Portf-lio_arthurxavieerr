var light = document.querySelector("#light")

document.addEventListener('mousemove', (e) => {
  light.style.top = (e.pageY - 400) + "px"
  light.style.left = (e.pageX - 400) + "px"
})