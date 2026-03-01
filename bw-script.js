function navigate(url) {
    window.location.href = url;
}

// mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var headerNav = document.querySelector('.header-nav');
    var mainNav = document.getElementById('main-nav');

    if (hamburger && headerNav && mainNav) {
        hamburger.addEventListener('click', function () {
            var isOpen = headerNav.classList.toggle('nav-open');
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // close nav after selecting a link on small screens
        mainNav.addEventListener('click', function (e) {
            var target = e.target;
            if (target.tagName === 'BUTTON') {
                if (window.innerWidth <= 768) {
                    headerNav.classList.remove('nav-open');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
});
