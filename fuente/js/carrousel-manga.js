let botones_manga = document.querySelector(".botones-manga");
let imgs_manga = document.querySelector(".carrousel-manga");
let titus_manga = document.querySelector(".titulos-manga");
let descs_manga = document.querySelector(".descs-manga");
let auts_manga = document.querySelector(".autores-manga");

let botonp_manga;
let img_manga;
let titu_manga;
let desc_manga;
let aut_manga;

for(let boton of botones_manga.querySelectorAll("button")) {
    boton.addEventListener("click", (evento) => {
        let cont = 0;
        let bool = true;

        for(let buttons of botones_manga.querySelectorAll("button")) {
            if(bool) {
                cont++;
            }
            
            if(buttons == evento.target) {
                bool = false;
            }
        }

        for(let boton of botones_manga.getElementsByClassName("boton-pink")) {
            botonp_manga = boton;
        }

        for(let img of imgs_manga.getElementsByClassName("imagen-manga")) {
            img_manga = img;
        }

        for(let titu of titus_manga.getElementsByClassName("titulo-manga")) {
            titu_manga = titu;
        }

        for(let desc of descs_manga.getElementsByClassName("desc-manga")) {
            desc_manga = desc;
        }

        for(let aut of auts_manga.getElementsByClassName("autor")) {
            aut_manga = aut;
        }

        if(!(evento.target == botonp_manga)) {
            evento.target.classList.add("boton-pink");
            evento.target.classList.remove("boton");

            botonp_manga.classList.remove("boton-pink");
            botonp_manga.classList.add("boton");

            imgs_manga.querySelector(".ocultacion:nth-child(" + cont + ")").classList.add("imagen-manga");
            imgs_manga.querySelector(".ocultacion:nth-child(" + cont + ")").classList.remove("ocultacion");

            img_manga.classList.add("ocultacion");
            img_manga.classList.remove("imagen-manga");

            titus_manga.querySelector(".ocultacion:nth-child(" + cont + ")").classList.add("titulo-manga");
            titus_manga.querySelector(".ocultacion:nth-child(" + cont + ")").classList.remove("ocultacion");

            titu_manga.classList.add("ocultacion");
            titu_manga.classList.remove("titulo-manga");

            descs_manga.querySelector(".ocultacion:nth-child(" + cont + ")").classList.add("desc-manga");
            descs_manga.querySelector(".ocultacion:nth-child(" + cont + ")").classList.remove("ocultacion");

            desc_manga.classList.add("ocultacion");
            desc_manga.classList.remove("desc-manga");

            auts_manga.querySelector(".ocultacion:nth-child(" + cont + ")").classList.add("autor");
            auts_manga.querySelector(".ocultacion:nth-child(" + cont + ")").classList.remove("ocultacion");

            aut_manga.classList.add("ocultacion");
            aut_manga.classList.remove("autor");
        }

    })
}