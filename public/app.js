console.log("My name is Cumi Oyemike");
const contactForm = document.querySelector('.contact-form');
let sendername = document.getElementById('sendername');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        sendername: sendername.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload =  function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Thank you for reaching out! Your email has been sent. I will contact you as soon as possible.');
            sendername.value = '';
            email.value = '';
            subject.value = '';
            message.value = ''
        } else {
            alert("Something went wrong!")
        }
    }

    xhr.send(JSON.stringify(formData));

})