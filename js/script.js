// ........................................form validation....................................................................
function validate(){
    var name=  document.getElementById("name").value
    var email= document.getElementById("email").value
    var message= document.getElementById("message").value

    if(name==""|| email==""||message==""){
        alert("blank fill the data");
        return false;
    }else{
        alert("Hello" +" " + name + " "+"we have received your message.We shall reach out to you shortly. Thank you . ")
    }
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the slider
showSlide(currentSlide);

