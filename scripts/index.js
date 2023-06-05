const navHamburgerBtn = document.querySelector('.nav-hamburger');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const dropDownHamburgerMenu = document.querySelector('.drop-menu');

window.addEventListener('click', (e) => {
    if( navHamburgerBtn.contains(e.target) ){
        dropDownHamburgerMenu.classList.add('open-menu');
    };

    if( closeMenuBtn.contains(e.target) || (!navHamburgerBtn.contains(e.target) && dropDownHamburgerMenu.classList.contains('open-menu') && !dropDownHamburgerMenu.contains(e.target)) ){
        dropDownHamburgerMenu.classList.remove('open-menu');
    };  
});

const animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('start-anim');
        };
    });
});

const ctaSection = document.querySelector('.final-cta');
animObserver.observe(ctaSection);
