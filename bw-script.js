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

const isDesktop = window.matchMedia("(hover: hover)").matches;
if (isDesktop) {
  const images = document.querySelectorAll("img");
  const dialog = document.createElement("dialog");
  const img = document.createElement("img");
  const close = document.createElement("button");


  dialog.appendChild(img);
  dialog.appendChild(close);
  document.body.appendChild(dialog);

  images.forEach((image) => {
    image.addEventListener("click", () => {
      img.src = image.src;
      close.textContent = image.alt;
      dialog.showModal();
    });
  });
  
  close.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right ||
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
  });
}
