const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");

const mobileMenuOpen = document.querySelector(".mobile-menu-open");

burgerIcon.addEventListener("click", () => {
    mobileMenuOpen.classList.remove("hidden");
    burgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
    mobileMenuOpen.classList.add("hidden");
    burgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
})