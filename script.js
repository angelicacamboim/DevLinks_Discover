function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //remove or add 'light'mode

  //tag image
  const img = document.querySelector("#profile img")
  //substituir a imagem
  //Se tiver light mode => adiciona a imagem light
  //Se não tiver light mode => manter a imagem normal
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Light: Avatar de oculos de sol")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Night: Avatar de oculos de grau")
  }
}