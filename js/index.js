let menu = document.querySelector("#header-menu");
let navbar = document.querySelector(".header-navbar");

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

let copyright = document.getElementById("copyright");
let year = new Date().getFullYear();
let text = `Copyright © ${year} by AG Kaizen Group | All Rights Reserved.`;
copyright.textContent = text;

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {

    sections.forEach(section => {

        let top = window.scrollY;
        let height = section.offsetHeight;
        let offset = section.offsetTop - document.querySelector("header").offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach(navlink => {
                navlink.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };

    });

    menu.classList.remove("bx-x");
    navbar.classList.remove("active");

};