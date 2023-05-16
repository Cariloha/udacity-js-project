const navSlide = () => {
    const burger = document.querySelector('.navbar__burger');
    const nav = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
