window.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".carousel__track");
    const slides = document.querySelectorAll(".carousel__card");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (!track || slides.length === 0) return;

    let index = 0;

    function update() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        update();
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        update();
    });

    setInterval(() => {
        index = (index + 1) % slides.length;
        update();
    }, 4000);

});