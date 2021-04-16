window.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider__item'),
        dotsWrap = document.querySelector('.slider__dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        dots.forEach((item) => item.classList.remove('dot_active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot_active');
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    dotsWrap.addEventListener('click', function(evt) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (evt.target.classList.contains('dot') && evt.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
});