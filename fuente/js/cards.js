let frameManga = document.querySelector(".frame-new-manga");
let cardWidthManga = frameManga.querySelector(".cards").offsetWidth;
let arrowsManga = document.querySelectorAll(".arrowManga");

arrowsManga.forEach(arrow => {
    arrow.addEventListener("click", () => {
        if (arrow.id == "flecha_izq") {
            frameManga.scrollLeft -= cardWidthManga;
        } else {
            frameManga.scrollLeft += cardWidthManga;
        }
    });
});

let frameAnime = document.querySelector(".frame-new-anime");
let cardWidthAnime = frameAnime.querySelector(".cards").offsetWidth;
let arrowsAnime = document.querySelectorAll(".arrowAnime");

arrowsAnime.forEach(arrow => {
    arrow.addEventListener("click", () => {
        if (arrow.id == "flecha_izq") {
            frameAnime.scrollLeft -= cardWidthAnime;
        } else {
            frameAnime.scrollLeft += cardWidthAnime;
        }
    });
});
