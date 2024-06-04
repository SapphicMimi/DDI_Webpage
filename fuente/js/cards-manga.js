let frameManga = document.querySelector(".frame-new-manga");
let cardWidthManga = frameManga.querySelector(".cards").offsetWidth;
let arrowsManga = document.querySelectorAll(".arrow");

arrowsManga.forEach(arrow => {
    arrow.addEventListener("click", () => {
        if (arrow.id == "flecha_izq") {
            frameManga.scrollLeft -= cardWidthManga;
        } else {
            frameManga.scrollLeft += cardWidthManga;
        }
    });
});