let brand = document.getElementById("brand");
let lineItem = Array.from(document.querySelectorAll('.nav-link'));
let navbar = document.getElementById("navbar");
let navToggler = document.getElementById("nav-toggler");
let wWidth = window.innerWidth;

function navAdapt() {
    console.log(wWidth);
    if (wWidth >= 768) {
        window.addEventListener('scroll', function () {
            scrollPosition = window.scrollY;
            if (scrollPosition >= 30) {
                navbar.classList.add("scrolled");
                brand.src = "src/img/logo.svg";
                lineItem.forEach((arrayElement, index) => {
                    setTimeout(function () {
                        lineItem[index].classList.add("text-grey");
                        lineItem[index].classList.remove("text-white");
                    }, 20);
                });

            } else {
                navbar.classList.remove("scrolled");
                brand.src = "src/img/logo-white.svg";
                lineItem.forEach((arrayElement, index) => {
                    setTimeout(function () {
                        lineItem[index].classList.add("text-white");
                        lineItem[index].classList.remove("text-grey");
                    }, 20);
                });
            }

        });
    } else {
        brand.src = "src/img/logo.svg";
        lineItem.forEach((arrayElement, index) => {
            setTimeout(function () {
                lineItem[index].classList.add("text-grey");
                lineItem[index].classList.remove("text-white");
            }, 20);
        });
    }
}

function printWWidth() {
    console.log(wWidth);
}
window.addEventListener('DOMContentLoaded', () => {
    printWWidth();
    navAdapt();
})

/* switch nav styles on scroll */
window.addEventListener('resize', function () {
    wWidth = window.innerWidth;
    printWWidth();
    navAdapt();
});

const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: true,
    path: 'src/img/anim-hero.json'
});

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver
    (function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})