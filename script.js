// script.js
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const originalUrl = window.location.href.split('#')[0];

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 150) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        history.pushState(null, null, originalUrl);
    });
});
