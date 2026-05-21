const inventory = [
    {
        model: "2026 Captain 2532 Tractor",
        type: "Compact",
        hp: 25,
        year: 2026,
        condition: "New",
        price: "Contact for Quote",
        image: "assets/captain-2532-field.jpeg",
        description: "A compact tractor with Mitsubishi 3-cylinder diesel power, 4WD, hydrostatic 3-range transmission, power steering, two hydraulic pumps, and 675 kg rear lift capacity."
    }
];

function updateDetail(item) {
    document.getElementById("detail-title").textContent = item.model;
    document.getElementById("detail-model").textContent = item.model;
    document.getElementById("detail-desc").textContent = item.description;
    document.getElementById("detail-hp").textContent = `${item.hp} HP`;
    document.getElementById("detail-year").textContent = item.year;
    document.getElementById("detail-condition").textContent = item.condition;
    document.getElementById("detail-condition-table").textContent = item.condition;
    const image = document.getElementById("detail-main-image");
    image.src = item.image;
    image.alt = `${item.model} main product image`;
    document.getElementById("detail").scrollIntoView({ behavior: "smooth" });
}

function updateHeaderState() {
    document.body.classList.toggle("is-scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => mobileMenu.classList.toggle("is-open"));
mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.remove("is-open"));
});

const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = lightbox.querySelector(".lightbox-close");

function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    lightboxImage.alt = "";
}

document.querySelectorAll(".gallery-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const image = trigger.querySelector("img");
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        lightboxClose.focus();
    });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
});

let observer;
function observeReveals() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, { threshold: 0.14 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

observeReveals();
