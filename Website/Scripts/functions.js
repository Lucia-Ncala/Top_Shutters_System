/*Script for image slider ends */
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
/*Script for image slider ends */

/*Script for hamburger toggle */
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container');
	
	hamburger.addEventListener('click',()=>{
		hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');

        // Add "Home" link dynamically to the hamburger menu
    if (!document.querySelector('.nav-list ul li.dynamic-home')) {
        const newListItem = document.createElement('li');
        newListItem.classList.add('dynamic-home');
        newListItem.innerHTML = '<a href="grades_form.php">Apply</a>';
        mobile_menu.appendChild(newListItem);
    }
});

