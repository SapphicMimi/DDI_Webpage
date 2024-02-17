let frame = document.querySelector(".frame-new-manga");
let cardWidth = frame.querySelector(".cards").offsetWidth;
let arrows = document.querySelectorAll(".arrow");

arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        if (arrow.id == "flecha_izq") {
            frame.scrollLeft -= cardWidth;
        } else {
            frame.scrollLeft += cardWidth;
        }
    });
});