// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
            section.classList.add("fade-in");
        }
    });
};

// Run on scroll
window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); // Run on load