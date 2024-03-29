const faqs = document.querySelectorAll('.faq');
const subscribeSection = document.querySelector('#subscribe-section');


window.addEventListener('click', (event) => {
    faqs.forEach((faq) => {
        if(faq.querySelector('.question').contains(event.target)){
            faq.querySelector('.answer').classList.toggle('faq-ans-open');
        };
    });
});




function getTimeRemaining(enddate) {
    // enddate should take format 'mm-dd-yyyy' if string.

    if (typeof enddate !== 'string' && typeof enddate !== 'object') throw new Error('enddate must be a string or object');

    if (typeof enddate === 'string') enddate = new Date(enddate);

    if (enddate.toString() === 'Invalid Date') throw new Error('enddate must be a valid date');

    if (enddate <= new Date()){
        return{
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    };

    const total = Date.parse(enddate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
};

function setTimeRemaining(enddate) {
    const timeRemaining = getTimeRemaining(enddate);

    document.getElementById('time-days').innerHTML = timeRemaining.days;
    document.getElementById('time-hours').innerHTML = timeRemaining.hours;
    document.getElementById('time-minutes').innerHTML = timeRemaining.minutes;
    document.getElementById('time-seconds').innerHTML = timeRemaining.seconds;
};

setInterval(() => {
    setTimeRemaining('10-12-2024');
}, 1000);


const subscribeSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            dropDownHamburgerMenu.classList.remove('open-menu');
        };
    });
});
subscribeSectionObserver.observe(subscribeSection);

const hiwRoundsWrapper = document.querySelector('.how-it-works .content-wp');
animObserver.observe(hiwRoundsWrapper);
