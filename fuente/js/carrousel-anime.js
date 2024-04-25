let botones_anime = document.querySelector(".botones");
let imgs_anime = document.querySelector(".carrousel");
let titus_anime = document.querySelector(".carrousel-titulo");
let descs_anime = document.querySelector(".descripciones");
let caja_anime = document.querySelector(".caja-comenzar");
let cats_anime = document.querySelector(".pertenece");

let botonp_anime;
let img_anime;
let titu_anime;
let desc_anime;
let boton_caja_anime;
let cat_anime;

for(let boton of botones_anime.querySelectorAll("button")) {
    boton.addEventListener("mouseenter", (evento) => {
        let cont = 0;
        let bool = true;

        for(let buttons of botones_anime.querySelectorAll("button")) {
            if(bool) {
                cont++;
            }
            
            if(buttons == evento.target) {
                bool = false;
            }
        }

        for(let boton of botones_anime.getElementsByClassName("boton-pink")) {
            botonp_anime = boton;
        }

        for(let img of imgs_anime.getElementsByClassName("carrousel-slide")) {
            img_anime = img;
        }

        for(let titu of titus_anime.getElementsByClassName("titulo")) {
            titu_anime = titu;
        }

        for(let desc of descs_anime.getElementsByClassName("description")) {
            desc_anime = desc;
        }

        for(let boton_caja of caja_anime.getElementsByClassName("texto-comenzar")) {
            boton_caja_anime = boton_caja;
        }

        for(let cat of cats_anime.getElementsByClassName("observable")) {
            cat_anime = cat;
        }

        if(!(evento.target == botonp_anime)) {
            evento.target.classList.add("boton-pink");
            evento.target.classList.remove("boton");

            botonp_anime.classList.remove("boton-pink");
            botonp_anime.classList.add("boton");

            imgs_anime.querySelector(".ocultacion:nth-child(" + cont + ")").classList.add("carrousel-slide");
            imgs_anime.querySelector(".ocultacion:nth-child(" + cont + ")").classList.remove("ocultacion");

            img_anime.classList.add("ocultacion");
            img_anime.classList.remove("carrousel-slide");

            titus_anime.querySelector(".ocultacion:nth-child(" + cont + ")").classList.add("titulo");
            titus_anime.querySelector(".ocultacion:nth-child(" + cont + ")").classList.remove("ocultacion");

            titu_anime.classList.add("ocultacion");
            titu_anime.classList.remove("titulo");

            descs_anime.querySelector(".ocultacion:nth-child(" + cont + ")").classList.add("description");
            descs_anime.querySelector(".ocultacion:nth-child(" + cont + ")").classList.remove("ocultacion");

            desc_anime.classList.add("ocultacion");
            desc_anime.classList.remove("description");

            caja_anime.querySelector(".ocultacion:nth-child(" + (cont + 1) + ")").classList.add("texto-comenzar");
            caja_anime.querySelector(".ocultacion:nth-child(" + (cont + 1) + ")").classList.remove("ocultacion");

            boton_caja_anime.classList.add("ocultacion");
            boton_caja_anime.classList.remove("texto-comenzar");

            cats_anime.querySelector(".ocultacion:nth-child(" + cont + ")").classList.add("observable");
            cats_anime.querySelector(".ocultacion:nth-child(" + cont + ")").classList.remove("ocultacion");

            cat_anime.classList.add("ocultacion");
            cat_anime.classList.remove("observable");
        }

    })
}