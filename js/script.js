var firstIndex=0;
function automaticSlide() {
    setTimeout(automaticSlide, 2000);
    var pics;
    const img=document.querySelectorAll('.slider');
    for(pics=0; pics<img.length;pics++){
        img[pics].style.display="none";
    }
    firstIndex++;
    if(firstIndex > img.length){
        firstIndex =1;
    }
    img[firstIndex -1].style.display="block";   
}
automaticSlide();




const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInput();
});

const setError = (Element, message) => {
    const inputControl = Element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = Element => {
    const inputControl = Element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInput = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }

    if (emailValue === '') {
        setError(email, 'email is required');
    } else {
        setSuccess(email);
    }
};

