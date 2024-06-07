document.addEventListener('DOMContentLoaded', () => {


    //  login
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Login bem-sucedido!');
        }
    });




    //carrossel

    let currentSlide = 0;

    function showSlide(index) {
        const carousel = document.querySelector('.carousel');
        const totalSlides = document.querySelectorAll('.carousel img').length;
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
    }

    window.nextSlide = function() {
        showSlide(currentSlide + 1);
    }

    window.prevSlide = function() {
        showSlide(currentSlide - 1);
    }



    

    // mudançaa automatica de slide (4,5)
    setInterval(() => {
        nextSlide();
    }, 4500);
});
