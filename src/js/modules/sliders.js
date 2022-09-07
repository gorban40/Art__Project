const sliders = (slides, direction, prev, next) => {
    let slideIndex = 1,
        paused = false;


    const items = document.querySelectorAll(slides);


    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(slide => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }
    showSlides(slideIndex);

    function changeSlides(n) {
        showSlides(slideIndex += n);
    }

    function activateAnimation() {
        if (direction == 'vertical') {
            paused = setInterval(() => {
                changeSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000)
        } else {
            paused = setInterval(() => {
                changeSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000)
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });


    try {
        const pervBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);


        pervBtn.addEventListener('click', () => {
            changeSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            changeSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });


    } catch (e) { }


};

export default sliders;