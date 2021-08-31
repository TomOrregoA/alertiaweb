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

function printWWidth(){
    console.log(wWidth);
}
window.addEventListener('DOMContentLoaded', ()=>{
    printWWidth();
    navAdapt();
})

/* switch nav styles on scroll */
window.addEventListener('resize', function () {
    wWidth = window.innerWidth;
    printWWidth();
    navAdapt();
});

