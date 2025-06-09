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

//Script for image slider ends 
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");

        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader){
            currentlyActiveAccordionItemHeader.classList.toggle("active"); 
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle("active");

        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }else{
            accordionItemBody.style.maxHeight = 0;
        }

    });
});
/*
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navMenu = document.querySelector('.nav-list ul');
    const body = document.body;
    
    // Create the Apply link element
    const applyLink = document.createElement('li');
    applyLink.innerHTML = '<a href="#apply">Apply</a>';
    applyLink.style.display = 'none'; // Hide by default
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
        
        // Toggle Apply link visibility
        if (navList.classList.contains('active')) {
            // Add the Apply link if it's not already there
            if (!applyLink.parentNode) {
                navMenu.appendChild(applyLink);
            }
            applyLink.style.display = 'block';
            body.style.overflow = 'hidden';
        } else {
            applyLink.style.display = 'none';
            body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on any link
    const navLinks = document.querySelectorAll('.nav-list ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
            applyLink.style.display = 'none';
            body.style.overflow = '';
        });
    });
    
    // Also close when clicking the Apply link
    applyLink.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        applyLink.style.display = 'none';
        body.style.overflow = '';
    });
});

    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const body = document.body;
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
        body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-list ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
            body.style.overflow = '';
        });
    });*/
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navMenu = document.querySelector('.nav-list ul');
    const body = document.body;

    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
            body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on any link
        document.querySelectorAll('.nav-list ul li a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }
});

    /*const applyLink = document.createElement('li');
    applyLink.innerHTML = '<a href="#apply">Apply</a>';
    applyLink.style.display = 'none';

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');

        if (navList.classList.contains('active')) {
            if (!applyLink.parentNode) {
                navMenu.appendChild(applyLink);
            }
            applyLink.style.display = 'block';
            body.style.overflow = 'hidden';
        } else {
            applyLink.style.display = 'none';
            body.style.overflow = '';
        }
    });

    document.querySelectorAll('.nav-list ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
            applyLink.style.display = 'none';
            body.style.overflow = '';
        });
    });

    applyLink.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        applyLink.style.display = 'none';
        body.style.overflow = '';
    });

    window.addEventListener('scroll', () => {
        if (navList.classList.contains('active')) {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
            applyLink.style.display = 'none';
            body.style.overflow = '';
        }
    });
});

// Accordion

    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", () => {
            const activeHeader = document.querySelector(".accordion-item-header.active");
            if (activeHeader && activeHeader !== accordionItemHeader) {
                activeHeader.classList.remove("active");
                activeHeader.nextElementSibling.style.maxHeight = 0;
            }

            accordionItemHeader.classList.toggle("active");
            const body = accordionItemHeader.nextElementSibling;
            body.style.maxHeight = accordionItemHeader.classList.contains("active")
                ? body.scrollHeight + "px"
                : 0;
        });
    });

     /*Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navMenu = document.querySelector('.nav-list ul');
    const body = document.body;

    const applyLink = document.createElement('li');
    applyLink.innerHTML = '<a href="#apply">Apply</a>';
    applyLink.style.display = 'none';

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        navList.classList.toggle('active');

        if (navList.classList.contains('active')) {
            if (!applyLink.parentNode) {
                navMenu.appendChild(applyLink);
            }
            applyLink.style.display = 'block';
            body.style.overflow = 'hidden';
        } else {
            applyLink.style.display = 'none';
            body.style.overflow = '';
        }
    });

    Close on link click
    document.querySelectorAll('.nav-list ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
            applyLink.style.display = 'none';
            body.style.overflow = '';
        });
    });

    applyLink.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        applyLink.style.display = 'none';
        body.style.overflow = '';
    });
});*/
