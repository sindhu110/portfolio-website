const text = "Sindhu Madaala";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("Sindhu Madaala").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}
typeEffect();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});