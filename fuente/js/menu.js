document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("menu_desplegable").classList.toggle("aparecer");
})

document.getElementById("menu_desplegable").addEventListener("scroll", (evento) => {
    evento.target.classList.remove("aparecer");
})