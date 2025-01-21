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

// Enable smooth scrolling for the "Learn More" button
document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#info-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});