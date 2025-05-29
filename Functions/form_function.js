document.addEventListener("DOMContentLoaded", function () {

// Change navbar color on scroll
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Form the changing of forms per user input
const formSelector = document.getElementById("form-selector");
if (formSelector) {
    formSelector.addEventListener("change", function () {
        const selectedValue = this.value;

        // Hide all forms initially
        document.querySelector(".form-second").style.display = "none";
        document.querySelector(".form-third").style.display = "none";

        // Show the selected form
        if (selectedValue === "form-second") {
            document.querySelector(".form-second").style.display = "block";
        } else if (selectedValue === "form-third") {
            document.querySelector(".form-third").style.display = "block";
        }
    });
}

});