const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const hero = document.querySelector(".hero");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Adjust hero margin based on menu state
    if (navLinks.classList.contains("active")) {
        hero.style.marginTop = `${navLinks.scrollHeight}px`; // Push hero down
    } else {
        hero.style.marginTop = "0"; // Reset margin
    }
});
