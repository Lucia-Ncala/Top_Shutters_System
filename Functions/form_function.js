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

// This is for the Grades Certificates
const gradeSelector = document.getElementById("grade-selector");
if (gradeSelector) {
    gradeSelector.addEventListener("change", function () {   
        const selectedValue = this.value;
        const priceInput = document.getElementById("grade-price");
                    
        if (priceInput) {
            priceInput.value = selectedValue ? `R ${selectedValue}` : "";
       }
    updateGradeTotal();
    });
}
            
// This is for the Grade additional Benefits
const gradeBenefitSelector = document.getElementById("grade-benefit-selector");
if (gradeBenefitSelector) {
    gradeBenefitSelector.addEventListener("change", function () {
        const selectedValue = this.value;
        const priceInput = document.getElementById("grade-benefit-price");
                    
        if (priceInput) {
            priceInput.value = selectedValue ? `R ${selectedValue}` : "";
       }
    updateGradeTotal();
    });
}
            
// Calculate total for Grade form
function updateGradeTotal() {
    const gradePrice = document.getElementById("grade-price").value.replace("R ", "") || 0;
    const benefitPrice = document.getElementById("grade-benefit-price").value.replace("R ", "") || 0;
    const total = parseInt(gradePrice) + parseInt(benefitPrice);
                
    document.getElementById("grade-total").value = `R ${total}`;
}

// This is for the Firearm Certificates
const firearmSelector = document.getElementById("firearm-selector");
if (firearmSelector) {
    firearmSelector.addEventListener("change", function () {
        const selectedValue = this.value;
        const priceInput = document.getElementById("firearm-price");
                    
        if (priceInput) {
            priceInput.value = selectedValue ? `R ${selectedValue}` : "";
        }
        updateFirearmTotal();
    });
}
            
// This is for the Firearm additional Benefits
const firearmBenefitSelector = document.getElementById("firearm-benefit-selector");
if (firearmBenefitSelector) {
    firearmBenefitSelector.addEventListener("change", function () {
    const selectedValue = this.value;
    const priceInput = document.getElementById("firearm-benefit-price");
                    
    if (priceInput) {
        priceInput.value = selectedValue ? `R ${selectedValue}` : "";
    }
    updateFirearmTotal();
    });
}
            
// Calculate total for Firearm form
function updateFirearmTotal() {
    const firearmPrice = document.getElementById("firearm-price").value.replace("R ", "") || 0;
    const benefitPrice = document.getElementById("firearm-benefit-price").value.replace("R ", "") || 0;
    const total = parseInt(firearmPrice) + parseInt(benefitPrice);
                
    document.getElementById("firearm-total").value = `R ${total}`;
    }
});
});