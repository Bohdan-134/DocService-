document.addEventListener("mousemove", parallax);

function parallax(event) {
    this.querySelectorAll(".header-main .bx").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 120;
        const y = (window.innerHeight - event.pageY * position) / 120;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

window.addEventListener('deviceorientation', function(e) {
    const x = Math.round(e.beta);
    const y = Math.round(e.gamma);
    const z = Math.round(e.alpha);


    //Parallax Effect

    document.querySelectorAll('.header-main .bx').forEach((item) => {
        item.style.transform = `translateY(-${x}%)`;
    })

});