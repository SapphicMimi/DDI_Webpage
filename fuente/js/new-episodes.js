let episodios = document.querySelectorAll(".episode");

for(let episode of episodios) {
    episode.addEventListener("mouseenter", (evento) => {
        
        let text_ep = episode.querySelector(".texts-episode");

        let num_ep = text_ep.querySelector(".num-episode");
        let more_details_ep = text_ep.querySelector(".more-details");
        let repro = text_ep.querySelector(".repro");

        num_ep.classList.add("ocultacion");
        more_details_ep.classList.add("ocultacion");
        repro.classList.remove("ocultacion");

    })
}

for(let episode of episodios) {
    episode.addEventListener("mouseleave", (evento) => {
        
        let text_ep = episode.querySelector(".texts-episode");

        let num_ep = text_ep.querySelector(".num-episode");
        let more_details_ep = text_ep.querySelector(".more-details");
        let repro = text_ep.querySelector(".repro");

        num_ep.classList.remove("ocultacion");
        more_details_ep.classList.remove("ocultacion");
        repro.classList.add("ocultacion");

    })
}