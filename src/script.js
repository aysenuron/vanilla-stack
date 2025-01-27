const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");

const mobileMenuOpen = document.querySelector(".mobile-menu-open");
const ctaButtonsMobile = document.querySelector("#cta-buttons-mobile");

burgerIcon.addEventListener("click", () => {
    mobileMenuOpen.classList.remove("hidden");
    ctaButtonsMobile.classList.remove("hidden");
    burgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
    mobileMenuOpen.classList.add("hidden");
    ctaButtonsMobile.classList.add("hidden");
    burgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
})