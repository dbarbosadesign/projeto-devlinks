function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito, usando óculos de sol e camisa preta com uma jaqueta com fundo colorido azul e rosa"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito, usando óculos e camisa preta com uma jaqueta com fundo colorido azul e rosa"
    )
  }

  //se tiver light mode adicionar imagem light, senao  manter imagem normal
}
