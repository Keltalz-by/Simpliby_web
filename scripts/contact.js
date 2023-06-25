
let messageFailedImage = '../media/images/message-failed.svg'
let messageSentImage = '../media/images/message-sent.svg'
const infoPopupButton = infoPopup.querySelector('button');
const messageForm = document.querySelector('#message-form');

infoPopupButton.addEventListener('click', hideInfoPopup);

function sendFailed(){
    infoPopupButton.disabled = false;
    infoPopup.querySelector('.illustration-img-wp').classList.add('glow-red');
    infoPopup.querySelector('#illustration-img').src = messageFailedImage;
    infoPopup.querySelector('p').innerText = "An error was encountered, please try again";
    infoPopupButton.innerText = 'Try again';
    showInfoPopup();
};

function sendSuccess(){
    infoPopupButton.disabled = false;
    infoPopup.querySelector('.illustration-img-wp').classList.remove('glow-red');
    infoPopup.querySelector('#illustration-img').src = messageSentImage;
    infoPopup.querySelector('p').innerText = "Your message has been sent. We'll get back to you shortly";
    infoPopupButton.innerText = 'Continue browsing';
    messageForm.reset();
    showInfoPopup();
};

window.onload = function() {
    emailjs.init('XOktbgszQZBbu45_g');
    messageForm.addEventListener('submit', function(event) {
        document.querySelector('#send-button').disabled = true;
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('simpliby_contact_service', 'simpliby_contact_form', this)
            .then(function() {
                console.log('SUCCESS: MESSAGE SENT!');
                sendSuccess();
            }, function(error) {
                console.log('FAILED: TRY AGAIN!', error);
                sendFailed();
            });
    });
}