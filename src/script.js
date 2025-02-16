const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");

const mobileMenuOpen = document.querySelector(".mobile-menu-open");
const ctaButtonsMobile = document.querySelector("#cta-buttons-mobile");

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

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

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

        const targetContentId = e.currentTarget.dataset.target;
        const targetContentElement = document.getElementById(targetContentId);
        targetContentElement.classList.add("active");

        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
    })
})

tabs[0].classList.add("active");
tabContents[0].classList.add("active");