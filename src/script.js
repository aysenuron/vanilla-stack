const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");

const nav = document.querySelector("nav");

burgerIcon.addEventListener("click", () => {
    nav.classList.remove("hidden");
    burgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
    nav.classList.add("hidden");
    burgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
})