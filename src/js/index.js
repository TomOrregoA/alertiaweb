let brand = document.querySelector('.navbar-brand img');
let navLink = Array.from(document.querySelectorAll('.nav-link'));
let navCollapse = document.querySelector('.navbar-collapse');
let navbar = document.getElementById("navbar");
let navToggler = document.getElementById("nav-toggler");

// Lottie and BodyMovin
const svgContainer = document.getElementById('hero-svg');

const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'src/img/anim-hero.json'
});

// Observers for animations
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
let hero = document.querySelector('.hero h1');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const sectionNavOptions = {
    threshold: 0,
    rootMargin: "-150px 0px 0px 0px"
};
const sectionNavObserver = new IntersectionObserver(function (
        entries,
        sectionNavObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add("nav-scrolled");
                brand.src = "src/img/logo.svg";
                animItem.play();

            } else {
                navbar.classList.remove("nav-scrolled");
                brand.src = "src/img/logo-white.svg";
            }
        })
    },
    sectionNavOptions);

sectionNavObserver.observe(hero);

const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove("appear");
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
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

/* Nav behavior */

navToggler.addEventListener('click', () => {
    navbar.classList.add("nav-scrolled");
    brand.src = "src/img/logo.svg";
    navExpanded = true;

});

navLink.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navCollapse.classList.remove('show');
    });
});