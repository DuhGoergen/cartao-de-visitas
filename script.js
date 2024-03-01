function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Myke Brito sorrindo, usando óculos escuros, camiseta e jaqueta pretas, barba por fazer e fundo roxo e azul"
    )
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Myke Brito sorrindo,usanco óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
