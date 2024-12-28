
// dark mode


let darkModeButton = document.getElementById("darkMode");
let body = document.getElementById("body");
let headerUl = document.getElementById("headerUl");
let headerA = document.getElementsByClassName("headerA");
let navUl = document.getElementById("navUl");
let footer = document.getElementById("footer_div");
let footerNS = document.getElementById("footerNS");
let footerInfo = document.getElementById("footerInfo");
let footerLi1 = document.getElementById("footer_li1");
let footerLi2 = document.getElementById("footer_li2");
let footerLi3 = document.getElementById("footer_li3");
let footerLi4 = document.getElementById("footer_li4");
let footerLi5 = document.getElementById("footer_li5");
let footerLi6 = document.getElementById("footer_li6");

darkModeButton.addEventListener("click", function(){
    body.classList.toggle("darkModeBody");
    footer.classList.toggle("darkModeFooter");
    footerInfo.classList.toggle("darkModeFooterText");
    footerNS.classList.toggle("darkModeFooterText");
    footerLi1.classList.toggle("darkModeFooterText");
    footerLi2.classList.toggle("darkModeFooterText");
    footerLi3.classList.toggle("darkModeFooterText");
    footerLi4.classList.toggle("darkModeFooterText");
    footerLi5.classList.toggle("darkModeFooterText");
    footerLi6.classList.toggle("darkModeFooterText");
})
