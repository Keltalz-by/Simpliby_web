const navHamburgerBtn = document.querySelector('.nav-hamburger');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const dropDownHamburgerMenu = document.querySelector('.drop-menu');
const infoPopup = document.querySelector('.popup-info-card');
const popupCloseButton = document.querySelector('#close-popup');


window.addEventListener('click', (e) => {
    if( navHamburgerBtn.contains(e.target) ){
        dropDownHamburgerMenu.classList.add('open-menu');
    };

    if( closeMenuBtn.contains(e.target) || (!navHamburgerBtn.contains(e.target) && dropDownHamburgerMenu.classList.contains('open-menu') && !dropDownHamburgerMenu.contains(e.target)) ){
        dropDownHamburgerMenu.classList.remove('open-menu');
    }; 
    
    if( popupCloseButton && (popupCloseButton.contains(e.target) || !infoPopup.contains(e.target)) ){
        hideInfoPopup();
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
if (ctaSection){
    animObserver.observe(ctaSection);
};

function showInfoPopup() {
    if (infoPopup){
        infoPopup.classList.add('open-menu');
    };
};

function hideInfoPopup() {
    if (infoPopup){
        infoPopup.classList.remove('open-menu');
    };
};

