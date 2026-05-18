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


const images = document.querySelectorAll("img");
const dialog = document.createElement("dialog");
const img = document.createElement("img");
const desc = document.createElement("p");
const spacer = document.createElement("p");
const closeBtn = document.createElement("button");
const leftArrow = document.createElement("button");
const rightArrow = document.createElement("button");
dialog.style.textAlign = 'center';

let currentIndex = 0;

closeBtn.textContent = "Close";
leftArrow.textContent = "←";
rightArrow.textContent = "→";
spacer.textContent = " ";
dialog.appendChild(leftArrow);
dialog.appendChild(closeBtn);
dialog.appendChild(rightArrow);
dialog.appendChild(spacer);
dialog.appendChild(img);
dialog.appendChild(desc);
document.body.appendChild(dialog);

function openModal(src, title) {
  img.src = src;
  desc.textContent = title;
  dialog.showModal();
}

images.forEach((image,index) => {
  image.addEventListener("click", () => {
    currentIndex = index;
    img.src = image.src;
    desc.textContent = image.title;
    dialog.showModal();
  });
});

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

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1);
  const nextImg = images[currentIndex];
  openModal(nextImg.src, nextImg.title);
});

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1);
  const prevImg = images[currentIndex];
  openModal(prevImg.src, prevImg.title);
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
