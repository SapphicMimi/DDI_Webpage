let botones_movil = document.querySelector(".botones-movil");
let imgs_titulo_movil = document.querySelector(".carrousel-titulo-movil");
let imgs_movil = document.querySelector(".carrousel-movil");

let botonp_movil;
let img_titulo_movil;
let img_movil;

for(let boton of botones_movil.querySelectorAll("button")) {
    boton.addEventListener("click", (evento) => {
        let cont = 0;
        let bool = true;

        for(let buttons of botones_movil.querySelectorAll("button")) {
            if(bool) {
                cont++;
            }
            
            if(buttons == evento.target) {
                bool = false;
            }
        }

        for(let boton of botones_movil.getElementsByClassName("boton-pink")) {
            botonp_movil = boton;
        }

        for(let img of imgs_titulo_movil.getElementsByClassName("carrousel-titulo-img")) {
            img_titulo_movil = img;
        }

        for(let img of imgs_movil.getElementsByClassName("carrousel-slide-movil")) {
            img_movil = img;
        }


        if(!(evento.target == botonp_movil)) {
            evento.target.classList.add("boton-pink");
            evento.target.classList.remove("boton");

            botonp_movil.classList.remove("boton-pink");
            botonp_movil.classList.add("boton");

            imgs_titulo_movil.querySelector(".ocultacion:nth-child(" + cont + ")").classList.add("carrousel-titulo-img");
            imgs_titulo_movil.querySelector(".ocultacion:nth-child(" + cont + ")").classList.remove("ocultacion");

            img_titulo_movil.classList.add("ocultacion");
            img_titulo_movil.classList.remove("carrousel-titulo-img");

            imgs_movil.querySelector(".ocultacion:nth-child(" + cont + ")").classList.add("carrousel-slide-movil");
            imgs_movil.querySelector(".ocultacion:nth-child(" + cont + ")").classList.remove("ocultacion");

            img_movil.classList.add("ocultacion");
            img_movil.classList.remove("carrousel-slide-movil");
        }

    })
}