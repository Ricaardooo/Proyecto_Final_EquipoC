window.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".carousel__track");
    const slides = document.querySelectorAll(".carousel__card");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (!track || slides.length === 0) return;

    let index = 0;

    function update() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    next.addEventListener("click", () => {
        index++;
        if (index >= slides.length) index = 0;
        update();
    });

    prev.addEventListener("click", () => {
        index--;
        if (index < 0) index = slides.length - 1;
        update();
    });

    setInterval(() => {
        index++;
        if (index >= slides.length) index = 0;
        update();
    }, 4000);

    window.addEventListener("resize", update);

});