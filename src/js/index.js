let brand = document.getElementById("brand");
var lineItem = Array.from(document.querySelectorAll('.nav-link'))

window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;

    if (scrollPosition >= 30) {
        navbar.classList.add("scrolled");
        brand.src = "/src/img/logo.svg";
        lineItem.forEach((arrayElement, index) => {
            setTimeout(function () {
                lineItem[index].classList.add("text-grey");
                lineItem[index].classList.remove("text-white");
            }, 20);
        });

    } else {
        navbar.classList.remove("scrolled");
        brand.src = "/src/img/logo-white.svg";
        lineItem.forEach((arrayElement, index) => {
            setTimeout(function () {
                lineItem[index].classList.add("text-white");
                lineItem[index].classList.remove("text-grey");
            }, 20);
        });
    }
});