document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded successfully!");

    // Fixing navigation links
    const navLinks = document.querySelectorAll("nav a");

    if (navLinks.length === 0) {
        console.error("Navigation links not found! Check your HTML structure.");
        return; // Stops the script if no links are found
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // Prevent default action if using smooth scrolling
            event.preventDefault();

            const targetPage = this.getAttribute("href");
            console.log("Navigating to:", targetPage);

            // Redirect to the correct page
            window.location.href = targetPage;
        });
    });

    // Optional: Smooth Scrolling for Single-Page Navigation
    // (Only use this if your site is one-page)
    /*
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
    */

    // Optional: Mobile Menu Toggle (If you have a hamburger menu)
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-links");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    } else {
        console.log("No mobile menu found. Skipping menu script.");
    }
});