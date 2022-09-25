console.log("hello world!");
console.log(screen.height);

const navbar = document.getElementById("nav-bar");
const burger = document.querySelector(".toogle");
const top_btn = document.querySelector(".top_scroller")

document.addEventListener('scroll', function () {

    if (navbar.classList.contains("burger")) {
        burger.click();
        // burger.classList.add("collapsed");
        // document.querySelector(".navbar-collapse").classList.remove("show");
    }

    if (scrollY >= 10) {
        navbar.style.backgroundColor = "rgb(165 168 172)";
        navbar.style.boxShadow = "black 0px 2px 9px 0px";
    }
    else {
        navbar.style.boxShadow = "none";
        navbar.style.backgroundColor = "transparent";
    }

    // console.log(scrollY);

    if (scrollY > 300) {  
        top_btn.style.bottom = 0;
        top_btn.style.opacity = 1;
    }
    else {
        top_btn.style.bottom = -100 + 'px';
        top_btn.style.opacity = 0;
    }
});

burger.addEventListener("click", (e) => {
    navbar.classList.toggle("burger");
});


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".li-cont ul li");
window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 900) {
            current = "#" + section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.firstElementChild.classList.remove("active");
        if (li.firstElementChild.classList.contains(current)) {
            li.firstElementChild.classList.add("active");
        }
    });
};




// if (scrollY < 10) {
// }



// 864
// 86
// 674
// 170%
// 78%
// 1.4vh
// 3vh