let media = window.matchMedia("(max-width: 605px)");

function hideFooterHeader(media) {
    if(media.matches) {
        document.getElementById("footer").classList.add("ocultacion");
    } else {
        document.getElementById("footer").classList.remove("ocultacion");
    }
}

hideFooterHeader(media);

media.addEventListener("change", () => {
    hideFooterHeader(media);
})