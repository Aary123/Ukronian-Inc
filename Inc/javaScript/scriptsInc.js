window.addEventListener("scroll", function () {

    if (window.scrollY > 600) {
        document.body.classList.add("scrolled-down");
    } else {
        document.body.classList.remove("scrolled-down");
       
    }

    document.head.appendChild(style);
});


window.addEventListener("scroll", function () {
    const style = document.createElement("style");

    if (window.scrollY > 900) {
        style.innerHTML = `
            ::-webkit-scrollbar-track-piece {
                background: var(--color-white);

            }

            ::-webkit-scrollbar-thumb {
                background: var(--color-negro);

            }

        `;
    } else {
        style.innerHTML = `
            ::-webkit-scrollbar-track-piece {
                background: var(--color-negro);

            }
            ::-webkit-scrollbar-thumb {
                background: var(--color-gris);

            
            }
        `;
    }

    document.head.appendChild(style);
});

function cargarPagina2() {
    window.open('formularioLog.html', '_blank');

}


